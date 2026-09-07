import { Skeleton } from "@/components/ui/skeleton";

const CertificationCardSkeleton = () => (
  <div className="card-gradient border border-border rounded-xl overflow-hidden">
    <Skeleton className="aspect-[16/10] w-full rounded-none" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-1.5 pt-2">
        <Skeleton className="h-5 w-16 rounded-md" />
        <Skeleton className="h-5 w-20 rounded-md" />
        <Skeleton className="h-5 w-14 rounded-md" />
      </div>
    </div>
  </div>
);

export default CertificationCardSkeleton;
