"use client";

import { useForm } from "react-hook-form";
import FormTitle from "@/components/form-title/FormTitle";
import Button from "@/components/global/ReusableFormButton";

interface PasswordUpdatedInputs {
    email: string;
    password: string;
}

export default function PasswordUpdated() {
    const { handleSubmit, formState: { errors } } = useForm<PasswordUpdatedInputs>();

    const onSubmit = (data: PasswordUpdatedInputs) => {
        console.log(data);
        // Add your login logic here
    };
    return (
        <div className="w-full max-w-[90%] md:max-w-[470px] mx-auto mt-12 p-6 md:py-10 md:px-8 bg-white rounded-3xl">
            <FormTitle 
                title="Password Updated!"
                subTitle=""
                tagline="Password Updated!"
            />
            <form onSubmit={handleSubmit(onSubmit)}>

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
