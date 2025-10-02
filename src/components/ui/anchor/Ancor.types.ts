import { LinkProps } from "next/link";
import { type VariantProps } from "class-variance-authority";
import { anchorVariants } from "./Anchor";

export type AnchorProps = React.ComponentProps<"a"> &
  LinkProps &
  VariantProps<typeof anchorVariants>;
