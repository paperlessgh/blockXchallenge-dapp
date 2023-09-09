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
  ContractFunctionExecutionError,
  parseEther,
  TransactionExecutionError,
  UserRejectedRequestError,
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
import { useCreateChallengeModal } from "@/common/hooks";

// schema
const createChallengeFormSchema = z.object({
  topicId: z.coerce
    .number({
      required_error: "Please select a topic.",
    })
    .min(0, "Please select a valid topic."),
  maturity: z
    .string({
      required_error: "Please specify a maturity time.",
    })
    .nonempty("Please specify a valid maturity time."),
  param: z
    .string({
      required_error: "Param is required.",
    })
    .nonempty("Please specify a valid param."),
  proposal: z.coerce
    .number({
      required_error: "Proposal is required.",
    })
    .min(0.001, "Please specify a valid proposal."),
  stake: z
    .string({
      required_error: "Stake is required.",
    })
    .nonempty("Please specify a valid stake."),
});

// types
type CreateChallengeFormValues = z.infer<typeof createChallengeFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<CreateChallengeFormValues> = {
  topicId: 0,
  maturity: "",
  param: "",
  proposal: 0,
  stake: "",
};

const CreateChallengeModal = () => {
  // modal hooks
  const { isOpen, setOpen, close: closeModal } = useCreateChallengeModal();

  // web3 hooks
  const { openConnectModal, connectModalOpen } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const {
    data: createChallengeResult,
    writeAsync: createChallenge,
    isLoading: isCreateChallengeLoading,
    isSuccess: isCreateChallengeSuccess,
    error: createChallengeError,
  } = useContractWrite({
    abi, // contract abi
    account: address, // your account address
    address: process.env.CONTRACT_ADDRESS! as Address, // contract address
    chainId: chain?.id, // chain id
    functionName: "createChallenge", // function name
  });

  // form hooks
  const form = useForm<CreateChallengeFormValues>({
    resolver: zodResolver(createChallengeFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // handlers
  const onSubmit: SubmitHandler<CreateChallengeFormValues> = async (
    data,
    event
  ) => {
    event?.preventDefault();

    const proposal = data.proposal * 1e8; // alway multiply proposal by 1e8

    try {
      const result = await createChallenge({
        args: [
          data.topicId,
          new Date(data.maturity).getTime(),
          data.param,
          proposal,
        ],
        value: parseEther(data.stake),
      });

      toast({
        title: "Challenge Pool Created",
        description: (
          <div>
            <div>
              <span className="font-bold">Topic Id:</span> {data.topicId}
            </div>
            <div>
              <span className="font-bold">Maturity:</span> {data.maturity}
            </div>
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

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="!max-h-[700px] bg-skin-bg border-skin-border sm:max-w-2xl overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            Create Challenge Pool
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Create a challenge pool to allow users to submit their solutions.
          </DialogDescription>
          <Separator className="opacity-60" />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="topicId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-skin-link">Topic</FormLabel>
                  <Select
                    name={field.name}
                    onValueChange={field.onChange}
                    value={field?.value?.toString()}
                  >
                    <FormControl className="!flex s-input !py-6">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Topic 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-skin-text">
                    Select a topic for your challenge pool.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maturity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-skin-link">
                    Maturity Time
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="datetime-local"
                      className="s-input !py-6"
                    />
                  </FormControl>
                  <FormDescription className="text-skin-text">
                    This is the time when the challenge pool will be matured.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="param"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-skin-link">Assets</FormLabel>
                  <Select
                    name={field.name}
                    onValueChange={field.onChange}
                    value={field?.value?.toString()}
                  >
                    <FormControl className="!flex s-input !py-6">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BTC">BTC</SelectItem>
                      <SelectItem value="ETH">ETH</SelectItem>
                      <SelectItem value="USDT">USDT</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-skin-text">
                    Select an asset for your challenge pool.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="stake"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-skin-link">Stake</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" className="s-input !py-6" />
                  </FormControl>
                  <FormDescription className="text-skin-text">
                    This is your stake for the challenge pool.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type={isConnected ? "submit" : "button"}
                disabled={isCreateChallengeLoading}
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
                  : isCreateChallengeLoading
                  ? "Loading"
                  : "Create Challenge"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChallengeModal;
