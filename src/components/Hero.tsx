'use client';

import { Container, Overlay, Title, Text, Group, Box, Stack } from '@mantine/core';
import type { ReactNode } from 'react';

type HeroProps = {
	image: {
		src: string;
		alt: string;
	};
	title: string;
	description: string;
	buttons?: ReactNode;
};

/**
 * A hero section with a background image, title, description, and buttons. Shown on each page's first view.
 * @returns A hero section with a background image, title, description, and buttons.
 */
export function Hero({ image, title, description, buttons }: HeroProps) {
	return (
		<div
			className="back relative h-screen w-screen bg-cover bg-center"
			style={{
				backgroundImage: `url(${image.src})`,
			}}
		>
			<Overlay color="#000" opacity={0.9} zIndex={1} />
			<Box className="text-centertext-xl relative z-10 h-full w-full p-10 font-bold" c="white">
				<Stack align="center" justify="center" h="100%" w="100%">
					<Title>{title}</Title>

					<Container size={640}>
						<Text size="lg">{description}</Text>
					</Container>

					<Group>{buttons}</Group>
				</Stack>
			</Box>
		</div>
	);
}
