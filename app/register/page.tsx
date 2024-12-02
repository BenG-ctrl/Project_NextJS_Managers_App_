"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
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

const formSchema = z.object({
  firstName: z.string().min(2, "name must be atleast 2 characters"),
  lastName: z.string().min(2, "name must be atleast 2 characters"),
  email: z.string().email("Email invalid"),
  password: z.string().min(8, "name must be atleast 8 characters"),
});

export default function register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-3xl text-black mb-6 text-center">
          Join Managers Now!
        </h1>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" w-3/4 py-2 mb-2 ml-9">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" w-3/4 py-2 mb-2 ml-9">Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
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
          Register
        </Button>
        <div className="ml-7">
          Already have an account?
          <Link href="/login" className="text-blue-600 ml-1">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
}
