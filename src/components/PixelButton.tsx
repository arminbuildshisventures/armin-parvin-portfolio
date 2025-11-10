import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}

export function PixelButton({ variant = "primary", children, className, ...props }: PixelButtonProps) {
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  };

  return (
    <Button
      className={cn(
        "pixel-border pixel-shadow hover:pixel-shadow-lg font-primary text-xs uppercase tracking-wider transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
