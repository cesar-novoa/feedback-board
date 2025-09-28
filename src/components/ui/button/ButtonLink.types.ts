import { LinkProps } from "next/link";
import { ButtonProps } from "./Button.types";

export type ButtonLinkProps =
  | LinkProps & React.ComponentProps<"a"> & ButtonProps;
