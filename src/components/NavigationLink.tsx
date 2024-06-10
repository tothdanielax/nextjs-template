'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import type { ComponentProps } from 'react';
import { Link } from '#/navigation';

/**
 * A navigation link that is styled based on whether it is active or not.
 * @returns the navigation link.
 */
export function NavigationLink({ href, ...rest }: ComponentProps<typeof Link>) {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
	const isActive = pathname === href;

	return (
		<Link
			aria-current={isActive ? 'page' : undefined}
			href={href}
			style={{ fontWeight: isActive ? 'bold' : 'normal' }}
			className="hover:contrast-150"
			{...rest}
		/>
	);
}
