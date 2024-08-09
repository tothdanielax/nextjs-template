import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '@/navigation';

/**
 * Hook to manage query parameters in the URL.
 */
export function useQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParameters = useSearchParams();
  const parameters = useMemo(() => new URLSearchParams(searchParameters.toString()), [searchParameters]);

  /**
   * Set a query parameter by name.
   */
  const set = useCallback(
    (name: string, value: string) => {
      parameters.set(name, value);
      router.push(`${pathname}?${parameters.toString()}`);
    },
    [parameters, pathname, router],
  );

  /**
   * Reset a query parameter by name.
   */
  const reset = useCallback(
    (name: string) => {
      // eslint-disable-next-line drizzle/enforce-delete-with-where
      parameters.delete(name);
      router.push(`${pathname}?${parameters.toString()}`);
    },
    [parameters, pathname, router],
  );

  /**
   * Reset all query parameters.
   */
  const resetAll = useCallback(() => {
    router.push(`${pathname}`);
  }, [pathname, router]);

  /**
   * Get a query parameter by name.
   */
  const get = useCallback((name: string) => searchParameters.get(name), [searchParameters]);

  /**
   * Get all query parameters.
   */
  const getAll = useCallback(
    (asString?: boolean) => {
      if (asString) {
        return searchParameters.toString();
      }

      return searchParameters;
    },
    [searchParameters],
  );

  return {
    get,
    getAll,
    set,
    reset,
    resetAll,
  };
}
