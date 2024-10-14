"use client";
// DefaultBtn.tsx
import { Button } from "@/components/ui/button";

interface DefaultBtnProps {
  text: string;
  fontSize: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  border?: string;
  hovertextColor?: string;
  size?: 'small' | 'medium' | 'large'; // size prop with options
  onClick?: () => void;
}

export default function DefaultBtn({
  text,
  bgColor,
  textColor,
  hoverBgColor,
  fontSize,
  border,
  hovertextColor,
  size = 'small',
  onClick,
}: DefaultBtnProps) {
  
  // Determine size-based styles
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-10 py-10 text-lg',
  };

  return (
    <Button
      style={{ backgroundColor: bgColor, color: textColor, fontSize: fontSize, border: border }}
      onClick={onClick}
      className={`transition-all duration-300 font-medium ${sizeClasses[size]}`} // apply size-based styles
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      {text}
    </Button>
  );
}
