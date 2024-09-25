import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}
export const Button = ({ children, size = "medium", className }: Props) => {
  const sizeClassNames: Record<"small" | "medium" | "large", string> = {
    // 12px
    small: "text-xs px-2 py-1",
    // 14px
    medium: "text-sm px-5 py-3",
    // 17px
    large: "text-lg px-8 py-5",
  };
  return (
    <button
      className={twMerge(
        "rounded-full bg-white text-textBlack",
        sizeClassNames[size],
        className,
      )}
    >
      {children}
    </button>
  );
};
