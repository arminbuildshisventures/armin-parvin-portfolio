import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function PixelCard({ children, className, hover = true, ...props }: PixelCardProps) {
  return (
    <Card
      className={cn(
        "pixel-border pixel-shadow bg-card p-6 transition-all",
        hover && "hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px]",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
