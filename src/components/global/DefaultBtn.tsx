// DefaultBtn.tsx
import { Button } from "@/components/ui/button";

interface DefaultBtnProps {
  text: string;
  bgColor?: string;
  textColor?: string; 
  hoverBgColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export default function DefaultBtn({
  text,
  bgColor = "#5DA389",
  textColor = "white",
  hoverBgColor = "black",
  onClick,
}: DefaultBtnProps) {
    return (
      <Button
        style={{ backgroundColor: bgColor, color: textColor }} 
        onClick={onClick}
        className={`transition-all duration-300 hover:bg-black`} // Change this line
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)} // Add this line
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)} // Add this line
      >
            {text}
      </Button>
    );
}
