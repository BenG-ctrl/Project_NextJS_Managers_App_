"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Email invalid"),
  password: z.string().min(8, "name must be atleast 8 characters"),
});

export default function login() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <h1 className="text-3xl text-black mb-6 text-center">
          Join Managers Now!
        </h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" w-3/4 py-2 mb-2 ml-9 ">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="JohnDoe@example.com"
                  className="w-3/4 justify-center items-center ml-9 bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" w-3/4 py-2 mb-2 ml-9">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  className="w-3/4 justify-center items-center ml-9 bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-3/4 ml-9 py-2 px-20 bg-blue-400 rounded mt-2 mb-2 text-white"
        >
          Login
        </Button>
        <div className="ml-7">
          New to CodeCLA.
          <Link href="/register" className="text-blue-600 ml-1">
            Signup
          </Link>
        </div>
      </form>
    </Form>
  );
}
