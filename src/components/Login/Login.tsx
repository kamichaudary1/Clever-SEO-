"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import FormTitle from "@/components/form-title/FormTitle";
import ReusableInput from "@/components/global/ReusableInput";
import Button from "@/components/global/ReusableFormButton";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    // Add your login logic here
  };

  return (
    <div className="w-full max-w-[90%] md:max-w-[470px] mx-auto mt-12 p-6 md:py-10 md:px-8 bg-white rounded-3xl">
      <FormTitle 
        title="Welcome to"
        subTitle="CleverSEO"
        tagline="Please sign in to your account" 
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReusableInput<LoginFormInputs>
          type="email"
          name="email"
          register={register}
          errorMessage={errors.email?.message}
          validation={{ required: "Email is required" }}
          placeholder="Enter your email"
        />
        
        <ReusableInput<LoginFormInputs>
          type="password"
          name="password"
          register={register}
          errorMessage={errors.password?.message}
          validation={{ required: "Password is required" }}
          placeholder="Enter your Password"
        />
        
        <Button 
          text="Login"
          bgColor="#5DA389"          
          textColor="#FFFFFF"         
          borderColor="transparent"       
          onClick={() => console.log("Button clicked")}
        />

        <p className="text-center mt-4">or continue with</p>
        
        <div className="mt-4">
          <Button 
            text="Google"
            bgColor="transparent"          
            textColor="#000"         
            borderColor="#333333"       
            onClick={() => console.log("Button clicked")}
          />
        </div>
        
        <div className="flex justify-between flex-wrap w-full mt-4">
          <label className="flex items-center justify-center text-sm w-full md:w-auto">
            <input type="checkbox" className="mr-1 ml-2" />
            Remember me
          </label>
          <Link href="/forget-password" className="flex justify-center md:justify-start text-left text-sm text-blue-500 w-full md:w-auto mt-2 md:mt-0">
            Forgot Password?
          </Link>
        </div>
        
        <p className="flex flex-wrap justify-center text-center mt-4">
          Don’t have an account? 
          <Link href="/signup" className="text-blue-500 ml-1">Create one</Link>
        </p>
      </form>
    </div>
  );
}
