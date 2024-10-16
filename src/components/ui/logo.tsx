import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export default function Logo({
  className,

  textClassName,
  showText = true,
}: LogoProps = {}) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src='logo2.png'
        alt='logo'
        className='w-10 h-10'
      />
      {showText && (
        <span
          className={cn("ml-2 text-2xl font-bold text-blue-900", textClassName)}
        >
          EduConnect
        </span>
      )}
    </div>
  );
}
