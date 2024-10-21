"use client";
// DefaultBtn.tsx
import { Button } from "@/components/ui/button";

interface DefaultBtnProps {
  text: string;
  fontSize: string;
  bgColor?: string;
  hoverBgColor?: string;
  border?: string;
  size?: 'small' | 'medium' | 'large';
  hovertextColor: "primary" | "secondary";
  textColor: "primary" | "secondary";
  onClick?: () => void;
}

export default function DefaultBtn({
  text,
  bgColor,
  hoverBgColor,
  fontSize,
  border,
  size = 'small',
  hovertextColor = 'primary',
  textColor = 'primary',
  onClick,
}: DefaultBtnProps) {
  
  // Determine size-based styles
  const sizeClasses = {
    small: 'px-5 py-2 text-base',
    medium: 'px-10 py-10 text-lg',
    large: 'px-10 py-10 text-lg',
  };

  // button color
  const buttonColor = {
    primary: "text-white",
    secondary: "text-black",
  }

  // Hover color
  const hoverColor = {
    primary: "hover:text-black",
    secondary: "hover:text-white",
  };

  return (
    <Button
      style={{ 
        backgroundColor: bgColor, 
        color: textColor, 
        fontSize: fontSize, 
        border: border 
      }}
      onClick={onClick}
      className={ `transition-all duration-300 font-medium shadow-2xl shadow-gray-800
        ${sizeClasses[size]} 
        ${buttonColor[textColor]}
        ${hoverColor[hovertextColor]}
      `}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor || "")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor || "")}
    >
      {text}
    </Button>
  );
}
