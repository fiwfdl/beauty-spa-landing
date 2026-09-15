import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-[background-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  default:
    "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(236,72,153,0.7)] hover:bg-accent hover:text-accent-foreground active:translate-y-px",
  outline:
    "border border-border bg-card/80 text-foreground hover:border-primary hover:text-primary active:translate-y-px",
  ghost: "text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  default: "min-h-11 px-6 py-3 text-sm",
  lg: "min-h-12 px-8 py-3.5 text-base",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props} />
  );
}
