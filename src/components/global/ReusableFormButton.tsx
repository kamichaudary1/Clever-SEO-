import { FC } from "react";
import Link from "next/link"; // For handling navigation in Next.js

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  type?: "button" | "submit" | "reset"; // For form-related buttons
  disabled?: boolean; // Optional disabled state
  href?: string; // Optional href prop for redirecting
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  bgColor = "#5DA389",
  textColor = "#FFFFFF",
  borderColor = "transparent",
  type = "button",
  disabled = false,
  href, // Add href prop for redirection
}) => {
  // If `href` is provided, render the button as a link
  if (href) {
    return (
      <Link href={href} passHref className={`flex justify-center items-center w-full max-w-[400px] h-9 text-[15px] rounded-md 
        transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${borderColor}
        ${disabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-800"}`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          border: `1px solid ${borderColor}`,
        }}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {text}
      </Link>
    );
  }

  // Otherwise, render as a standard button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-[400px] h-9 text-[15px] rounded-md transition-colors duration-300
        hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${borderColor}
        ${disabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-800"}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
