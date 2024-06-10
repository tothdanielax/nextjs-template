import { Link } from '#/navigation';
import { IconBrandMantine } from '@tabler/icons-react';
import { Group, Title } from '@mantine/core';
import React from 'react';

/**
 * The company brand that appears in the navbar.
 */
export function Brand() {
	return (
		<Group component={Link} href="/" id="brand">
			<IconBrandMantine size={30} />
			<Title order={3}>Example</Title>
		</Group>
	);
}
