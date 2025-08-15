import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";
import Loading from "@/assets/icons/Loading";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 font-epilogue disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900",
        dark: "text-white bg-dark-100 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "bg-color-secondary text-color-light hover:bg-secondary/90",
        outline:
          "text-gray-900 bg-transparent border border-[#C724B1] focus:outline-none hover:bg-light-100 focus:ring-4 focus:ring-gray-100 text-[#C724B1] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  variant?: "default" | "outline" | "secondary" | "link" | "dark";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        children={
          <div className="gap-2 flex items-center justify-center">
            {loading && <Loading />}
            <span>{children}</span>
          </div>
        }
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
