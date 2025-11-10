import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function PixelCard({ children, className, hover = true }: PixelCardProps) {
  return (
    <Card
      className={cn(
        "pixel-border pixel-shadow bg-card p-6 transition-all",
        hover && "hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px]",
        className
      )}
    >
      {children}
    </Card>
  );
}
