import { Skeleton } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center px-4 py-1 border rounded-lg shadow-md bg-gray-300
     border-gray-500 dark:bg-gray-800">
      {/* Image Placeholder */}
      <Skeleton className="w-full h-48 mb-4 rounded-lg" />

      {/* Title Placeholder */}
      <Skeleton className="w-3/4 h-4 mb-2" />

      {/* Subtitle Placeholder */}
      <Skeleton className="w-1/2 h-2 mb-4" />

      {/* Icons Placeholder */}
      <div className="flex space-x-4">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
