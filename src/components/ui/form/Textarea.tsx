import React from "react";

import { cn } from "@/utils/utils";
import { INPUT_CLASSES } from "@/constants/components/form/inputs";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full border bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-y",
        INPUT_CLASSES.FOCUS,
        INPUT_CLASSES.ARIA,
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
