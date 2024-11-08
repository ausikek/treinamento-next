import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      {Array.from(Array(100).keys()).map((_, index) => {
        return <Skeleton key={index} className="h-[21.625em]" />;
      })}
    </>
  );
}
