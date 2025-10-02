import React from "react";
import { cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { AnchorProps } from "./Ancor.types";
import { cn } from "@/utils/utils";

const anchorVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary underline-offset-4 hover:underline",
      disabled:
        "pointer-events-none opacity-50 decoration-gray-500 line-through decoration-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Anchor({ className, variant, href, ...props }: AnchorProps) {
  return (
    <Link
      href={href || "#"}
      className={cn(anchorVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Anchor, anchorVariants };
