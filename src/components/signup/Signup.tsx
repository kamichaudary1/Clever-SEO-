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
    <div className="w-full max-w-[90%] md:max-w-[470px] mx-auto mt-12 p-6 md:py-10 md:px-8 bg-white rounded-3xl">
      <FormTitle 
        title="Welcome to"
        subTitle="CleverSEO"
        tagline="Join today and start your journey!"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="email"
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

        <p className="flex flex-wrap justify-center text-center mt-4">
          Already have an account? <Link href="/login" className="text-blue-500 ml-1">Login</Link>
        </p>
      </form>
    </div>
  );
}
