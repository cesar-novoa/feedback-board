import Link from "next/link";
import { Button } from "./Button";
import { ButtonLinkProps } from "./ButtonLink.types";

function ButtonLink({ href, children, target, ...props }: ButtonLinkProps) {
  return (
    <Button asChild {...props}>
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
}

export default ButtonLink;
