import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface ReusableInputProps {
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errorMessage?: string;
  validation?: Record<string, any>;
  placeholder: string;
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
        className={`border mb-3 py-2 px-3 rounded-lg w-full outline-none placeholder:text-[rgba(20,48,21,0.4)] text-[14px] ${
          errorMessage
            ? "border-red-500 bg-[rgba(49,114,52,0.09)]" 
            : "border-none bg-[rgba(49,114,52,0.09)]"
        }`}
        placeholder={placeholder}
      />
      {errorMessage && <span className="text-red-500 text-xs text-left w-full flex justify-start -mt-2 mb-2 ml-1">{errorMessage}</span>}
    </div>
  );
}
