import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// NEXT MOCKS
vi.mock('next/router', () => import('next-router-mock'));
vi.mock('next-auth/react', async () => {
	const originalModule = await vi.importActual('next-auth/react');
	return {
		__esModule: true,
		...originalModule,
		useSession: () => ({
			status: 'unauthenticated',
		}),
	};
});

// TRPC MOCKS
vi.mock('#utils/api', async () => ({
	...(await vi.importActual('#/utils/api')),
	api: {
		useUtils: vi.fn(),
		withTRPC: vi.fn(),
	},
}));

// MANTINE MOCKS
vi.mock('@mantine/hooks', async () => ({
	...(await vi.importActual('@mantine/hooks')),
	useMantineColorScheme: () => ({ colorScheme: 'dark', toggleColorScheme: vi.fn() }),
	useNetwork: () => ({ online: true }),
}));

vi.mock('@mantine/form', async () => ({
	...(await vi.importActual('@mantine/form')),
	useForm: vi.fn().mockReturnValue({
		errors: {},
		getInputProps: vi.fn(),
		handleBlur: vi.fn(),
		handleChange: vi.fn(),
		handleSubmit: vi.fn(),
		onSubmit: vi.fn(),
		touched: {},
		values: { password: '', username: '' },
	}),
}));

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
	value: vi.fn().mockImplementation((query) => ({
		addEventListener: vi.fn(),
		addListener: vi.fn(),
		dispatchEvent: vi.fn(),
		matches: false,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		media: query,
		onchange: null,
		removeEventListener: vi.fn(),
		removeListener: vi.fn(),
	})),
	writable: true,
});

class ResizeObserver {
	disconnect() {}
	observe() {}
	unobserve() {}
}

window.ResizeObserver = ResizeObserver;
