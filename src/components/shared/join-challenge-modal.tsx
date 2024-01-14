"use client";

// next
import Link from "next/link";
// imports
import * as z from "zod";
import {
  Address,
  useAccount,
  useConnect,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";
import {
  parseEther,
  UserRejectedRequestError,
  TransactionExecutionError,
  ContractFunctionExecutionError,
} from "viem";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useConnectModal } from "@rainbow-me/rainbowkit";

// abi
import { abi } from "@/abi/challengeblock.json";

// ui components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

// hooks
import { useJoinChallengeModal } from "@/common/hooks";

// schema
const joinChallengeFormSchema = z.object({
  proposal: z.coerce
    .number({
      required_error: "Proposal is required.",
    })
    .min(0.001, "Please specify a valid proposal."),
});

// types
type JoinChallengeFormValues = z.infer<typeof joinChallengeFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<JoinChallengeFormValues> = {
  proposal: 0,
};

const JoinChallengeModal = () => {
  // modal hooks
  const {
    isOpen,
    close: closeModal,
    setOpen,
    challenge,
  } = useJoinChallengeModal();

  // web3 hooks
  const { openConnectModal, connectModalOpen } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const {
    data: joinChallengeResult,
    writeAsync: joinChallenge,
    isLoading: isJoinChallengeLoading,
    isSuccess: isJoinChallengeSuccess,
    error: joinChallengeError,
  } = useContractWrite({
    abi, // contract abi
    account: address, // your account address
    address: process.env.CONTRACT_ADDRESS! as Address, // contract address
    chainId: chain?.id, // chain id
    functionName: "joinChallenge", // function name
  });

  // form hooks
  const form = useForm<JoinChallengeFormValues>({
    resolver: zodResolver(joinChallengeFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // handlers
  const onSubmit: SubmitHandler<JoinChallengeFormValues> = async (
    data,
    event
  ) => {
    event?.preventDefault();

    if (!isConnected || !challenge) {
      return;
    }

    const challengeId = challenge.id; // todo get the challenge id from the from challenge data
    const proposal = data.proposal * 1e8; // alway multiply proposal by 1e8

    try {
      const result = await joinChallenge({
        args: [challengeId, proposal],
        value: parseEther(challenge.stake), // todo get the stake from the from challenge data
      });

      toast({
        title: "Joined Challenge",
        description: (
          <div>
            <Link
              href={`https://goerli-optimism.etherscan.io/tx/${result.hash}`}
            >
              View Transaction
            </Link>
          </div>
        ),
      });

      form.reset(defaultValues);
    } catch (error) {
      let message = "Something went wrong.";

      if (
        error instanceof TransactionExecutionError ||
        error instanceof ContractFunctionExecutionError
      ) {
        if (error.cause instanceof UserRejectedRequestError) {
          // ignore
          return;
        }
        message = error.cause.message;
      }

      toast({
        title: "Error",
        description: message,
      });
      console.log({
        error,
      });
    }
  };

  if (!challenge) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="!max-h-[700px] bg-skin-bg border-skin-border sm:max-w-2xl overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            Join {challenge?.topic.title} Challenge Pool
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {challenge?.topic.description}
          </DialogDescription>
          <Separator className="opacity-60" />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="proposal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-skin-link">Proposal</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" className="s-input !py-6" />
                  </FormControl>
                  <FormDescription className="text-skin-text">
                    This is your proposal for the challenge pool.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type={isConnected ? "submit" : "button"}
                disabled={isJoinChallengeLoading}
                {...(!isConnected
                  ? {
                      onClick: () => {
                        if (openConnectModal && !connectModalOpen) {
                          closeModal();
                          openConnectModal();
                        }
                      },
                    }
                  : {})}
              >
                {!isConnected
                  ? "Connect Wallet"
                  : isJoinChallengeLoading
                  ? "Loading..."
                  : "Join Challenge"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinChallengeModal;
