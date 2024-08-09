import { Skeleton } from '@/components/ui/skeleton';

/**
 * The root layout for the app. This is where the page transitions are handled.
 * @returns The root layout.
 */
export default async function RootLoading() {
  return (
    <div className="flex grow items-center justify-center">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[500px]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
