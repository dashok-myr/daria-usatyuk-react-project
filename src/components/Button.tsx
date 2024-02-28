import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const ButtonVariants = cva(
  "font-semibold h-fit rounded-xl transition-colors duration-150",
  {
    variants: {
      intent: {
        primary: "bg-blue-950 hover:bg-blue-900 text-white",
        secondary:
          "text-amber-500 border border-amber-500 hover:border-amber-700 hover:text-amber-700",
      },
      size: {
        medium: ["text-base", "py-2", "px-12"],
        large: ["text-lg", "py-3", "px-12"],
      },
      fullWidth: {
        true: "w-full",
        false: "w-max",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "large",
    },
  }
);

type ButtonVariants = VariantProps<typeof ButtonVariants>;

type IButtonProps = PropsWithChildren<ButtonVariants>;

export default function Button({
  intent,
  size,
  fullWidth,
  children,
}: IButtonProps) {
  return (
    <button className={ButtonVariants({ intent, size, fullWidth })}>
      {children}
    </button>
  );
}
