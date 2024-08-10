import { StatsLoadingCard } from "@/components/StatsCard";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="p-8 gap-4 grid md:grid-cols-2 lg:grid-cols-3 ga-4 rounded-lg border">
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
    </div>
  );
}

export default loading;
