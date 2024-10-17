import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bgColor?: string; 
  textColor?: string;
  borderColor?: string;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  bgColor = "#5DA389", 
  textColor = "#FFFFFF", 
  borderColor = "#333333",
}) => (
  <button
    onClick={onClick}
    className={`w-[400px] h-9 text-[15px] rounded-md hover:bg-gray-800 transition-colors`}
    style={{
      backgroundColor: bgColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
    }}
  >
    {text}
  </button>
);

export default Button;
