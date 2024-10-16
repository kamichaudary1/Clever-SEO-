"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import FormTitle from "@/components/form-title/FormTitle";
import InputField from "@/components/global/ReusableInput";
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
    <div className="w-full md:w-[470px] h-[590px] mx-5 md:mx-auto mt-12 py-10 px-8 bg-white rounded-3xl">
      <FormTitle tagline="Please sign in to your account" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          name="email"
          register={register}
          errorMessage={errors.email?.message}
          validation={{ required: "Email is required" }}
          placeholder="Enter your email"
        />
        
        <InputField
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
        <div className="mt-4">
          <Button 
            text="Apple"
            bgColor="#000"          
            textColor="#FFFFFF"      
            borderColor="#transparent"       
            onClick={() => console.log("Button clicked")}
          />
        </div>
        
        <div className="flex justify-between mt-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-sm text-blue-500">Forgot Password?</Link>
        </div>
        
        <p className="text-center mt-4">
          Don’t have an account? <Link href="/signup" className="text-blue-500">Create one</Link>
        </p>
      </form>
    </div>
  );
}
