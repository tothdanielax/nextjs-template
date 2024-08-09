import { Link } from '@/navigation';
import { Button } from '@/components/ui/button';
import type { ComponentProps } from 'react';

type ButtonLinkProps = {
  buttonProps?: ComponentProps<typeof Button>;
  linkProps?: Omit<ComponentProps<typeof Link>, 'href'>;
  href: string;
  title: string;
};

export function ButtonLink({ buttonProps, linkProps, href, title }: ButtonLinkProps) {
  return (
    <Button asChild {...buttonProps}>
      <Link href={href} {...linkProps}>
        {title}
      </Link>
    </Button>
  );
}
