"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import FormTitle from "@/components/form-title/FormTitle";
import InputField from "@/components/global/ReusableInput";
import Button from "@/components/global/ReusableFormButton";

interface ForgotPasswordInputs {
  email: string;
  password: string;
}

export default function ForgetPassword() {

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordInputs>();
  const onSubmit = (data: ForgotPasswordInputs) => {
    console.log(data);
    // Add your login logic here
  };

  return (
    <div className="w-full max-w-[90%] md:max-w-[470px] mx-auto mt-12 p-6 md:py-10 md:px-8 bg-white rounded-3xl">
      <FormTitle 
          title="Forgot Password?"
          subTitle=""
          tagline="Provide your accounts email for which you want to reset your Password."
      />
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
          text="Next"
          bgColor="#5DA389"          
          textColor="#FFFFFF"         
          borderColor="transparent"       
          onClick={() => console.log("Button clicked")}
        />  
        <p className="flex flex-wrap justify-center text-center mt-4">
          Remembered your Password?
          <Link href="/login" className="text-blue-500 ml-1">Log in</Link>
        </p>      
      </form>
    </div>
  )
}
