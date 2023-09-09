"use client";

// imports
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

// hooks
import { useChallengeModal } from "@/common/hooks";

// schema
const createChallengeFormSchema = z.object({
  topicId: z.coerce
    .number({
      required_error: "Please select a topic.",
    })
    .min(1),
  maturity: z.string({
    required_error: "Please specify a maturity time.",
  }),
  param: z.string({
    required_error: "Param is required.",
  }),
  proposal: z.string({
    required_error: "Proposal is required.",
  }),
  stake: z.string({
    required_error: "Stake is required.",
  }),
});

// types
type CreateChallengeFormValues = z.infer<typeof createChallengeFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<CreateChallengeFormValues> = {};

const CreateChallengeModal = () => {
  // hooks
  const { isOpen, setOpen } = useChallengeModal();
  const form = useForm<CreateChallengeFormValues>({
    resolver: zodResolver(createChallengeFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // handlers
  const onSubmit: SubmitHandler<CreateChallengeFormValues> = (data, event) => {
    event?.preventDefault();

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="bg-skin-bg border-skin-border sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">Create Challenge Pool</DialogTitle>
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
                    onValueChange={field.onChange}
                    defaultValue={field?.value?.toString()}
                  >
                    <FormControl className="!flex s-input !py-6">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Topic 1</SelectItem>
                      <SelectItem value="2">Topic 2</SelectItem>
                      <SelectItem value="3">Topic 3</SelectItem>
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
                  <FormLabel className="text-skin-link">Param</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" className="s-input !py-6" />
                  </FormControl>
                  <FormDescription className="text-skin-text">
                    This is your param for the challenge pool.
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
            <DialogFooter>
              <Button type="submit">Create Pool</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChallengeModal;
