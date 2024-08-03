import '@testing-library/jest-dom/vitest';
import {vi} from 'vitest';

vi.mock('next/router', () => import('next-router-mock'));
