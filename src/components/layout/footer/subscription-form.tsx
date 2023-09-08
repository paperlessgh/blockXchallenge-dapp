// imports
import * as z from "zod";
import { SendHorizonalIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

// ui components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// form schema
const subscriptionFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type SubscriptionFormValues = z.infer<typeof subscriptionFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<SubscriptionFormValues> = {};

const SubscriptionForm = () => {
  // hooks
  const { toast } = useToast();
  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<SubscriptionFormValues> = (data, event) => {
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex relative mx-auto w-[300px]"
      >
        <div className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="group relative z-10">
                    <Input
                      {...field}
                      placeholder="Your email"
                      className="!pr-[66px] s-input !h-[42px] rounded-full placeholder:text-skin-text placeholder:font-medium"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <Button
                        variant="ghost"
                        type="submit"
                        name="subscribe"
                        className="absolute right-0 h-[42px] rounded-r-full px-3 hover:bg-transparent"
                      >
                        <SendHorizonalIcon
                          size={24}
                          width="1.2em"
                          height="1.2em"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="text-skin-link"
                        />
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormDescription className="text-skin-text">
                  This is the email {"we'll"} send updates to.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default SubscriptionForm;
