import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface ReusableInputProps {
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errorMessage?: string;
  validation?: Record<string, any>;
  placeholder?: string;
}

export default function ReusableInput({
  type,
  name,
  register,
  validation,
  errorMessage,
  placeholder,
}: ReusableInputProps) {
  return (
    <div>
      <input
        type={type}
        {...register(name, validation)}
        className="border-none py-2 px-3 rounded-lg w-full bg-[rgba(49,114,52,0.09)] mb-3 outline-none placeholder:text-[rgba(20,48,21,0.4)] text-[14px]"
        placeholder={placeholder} 
      />
      {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
}
