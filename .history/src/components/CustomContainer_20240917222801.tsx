import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const CustomContainer = ({ children, className }: Props) => {
  return (
    <div className={twMerge("mx-auto max-w-[980px] px-6", className)}>
      {children}
    </div>
  );
};
