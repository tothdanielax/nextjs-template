'use client';

// @see https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg
import { motion } from 'framer-motion';
import { usePathname } from '#/navigation';
import type { ReactNode } from 'react';

/**
 * Props for {@link Template}.
 */
type TemplateProps = {
	children: ReactNode;
};

/**
 * A template component that animates page transitions.
 * Templates should be utilized for transitions, because they are the only shared components that are mounted on every page change.
 */
export default function Template({ children }: TemplateProps) {
	const pathname = usePathname();

	return (
		<motion.div
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.5 }}
			key={pathname}
		>
			{children}
		</motion.div>
	);
}
