
"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import {toast} from "sonner"

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
import { Input } from "@/components/ui/input";

 

const authFormSchema = (type: FormType)=>{

  return z.object ({
    name: type==='sign-up' ? z.string().min(3) : z.string().optional(),
    email:z.string().email(),
    password:z.string().min(3),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
       name:"",
       email:"",
       password:""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try{
         if(type=='sign-up'){
          console.log('Sign Up',values)
         }else{
          console.log('Sign in ', values)
         }
    }catch(error){
      console.log(error);
      toast.error(`There was an error : ${error}`)
    }
  }
  const isSign = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2>Skill Scanner</h2>
        </div>
        <h3>Practice job interview with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full mt-4 form"
          >
            {!isSign && <p>Name</p>}
            <p>Email</p>
            <p>Password</p>
            <Button  className="btn " type="submit">{isSign ? 'Sign in' : 'Create an Account'}</Button>
          </form>
        </Form>
        <p className="text-center">
          {isSign ? 'No account yet' : 'Have an account already?'}
          <Link href={!isSign ? '/sing-up' : '/sign-up'} className="font-bold text-user-primary ml-1 ">
          {!isSign ? "Sign in" : "Sign up"}</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
