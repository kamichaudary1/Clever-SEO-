"use client";

import { useForm } from "react-hook-form";
import FormTitle from "@/components/form-title/FormTitle";
import InputField from "@/components/global/ReusableInput";
import Button from "@/components/global/ReusableFormButton";

interface NewCredentialsInputs {
  email: string;
  password: string;
}

export default function NewCredentials() {
    const { register, handleSubmit, formState: { errors } } = useForm<NewCredentialsInputs>();

    const onSubmit = (data: NewCredentialsInputs) => {
        console.log(data);
        // Add your login logic here
    };
    return (
        <div className="w-full max-w-[90%] md:max-w-[470px] mx-auto mt-12 p-6 md:py-10 md:px-8 bg-white rounded-3xl">
            <FormTitle 
                title="New Credentials"
                subTitle=""
                tagline="Your Identity has been verified, Set your new password"
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
                    text="Sign in"
                    bgColor="#5DA389"          
                    textColor="#FFFFFF"         
                    borderColor="transparent"       
                    onClick={() => console.log("Button clicked")}
                />
            </form>
        </div>
    )
}
