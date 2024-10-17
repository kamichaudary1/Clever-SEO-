"use client";

import { useForm } from "react-hook-form";
import FormTitle from "@/components/form-title/FormTitle";
import InputField from "@/components/global/ReusableInput";
import Button from "@/components/global/ReusableFormButton";
import Link from "next/link";

interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>();

  const onSubmit = (data: SignupFormInputs) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(data);
    // Add your signup logic here
  };

  return (
    <div className="w-full md:w-[470px] h-[590px] mx-5 md:mx-auto mt-12 py-10 px-8 bg-white rounded-3xl">
      <FormTitle tagline="Please sign in to your account" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          type="email"
          name="email"
          register={register}
          validation={{ required: "Email is required" }}
          errorMessage={errors.email?.message}
          placeholder="Enter your email"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          register={register}
          validation={{ required: "Password is required" }}
          errorMessage={errors.password?.message}
          placeholder="Enter your Password"
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          register={register}
          validation={{ required: "Confirm your password" }}
          errorMessage={errors.confirmPassword?.message}
          placeholder="Confirm your Password"
        />

        <Button 
          text="SignUp"
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

        <p className="text-center mt-4">
          Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
}
