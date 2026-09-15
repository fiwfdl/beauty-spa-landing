import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-sans font-semibold tracking-[0.01em] transition-[transform,box-shadow,background-color,color,border-color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-btn)] hover:-translate-y-0.5 hover:bg-sage-800 hover:shadow-[var(--shadow-btn-hover)]",
        ghost:
          "border border-primary bg-transparent text-primary hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground",
        secondary:
          "border border-transparent bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-pink-200",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-6 py-2.5 text-base",
        sm: "min-h-9 px-4 text-sm",
        lg: "min-h-12 px-7 py-3 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
