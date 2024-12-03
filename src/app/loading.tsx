import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      {Array.from(Array(100).keys()).map((_, index) => {
        return <Skeleton key={index} className='h-[21.625em]' />;
      })}
    </>
  );
}

export function LoadingCard() {
  return (
    <>
      <h1 className='text-5xl font-bold'>
        <Skeleton className='h-9 w-36' />
      </h1>
      <Skeleton className='mt-4 rounded-md w-96 h-96' />
      <h2 className='text-lg font-normal'>
        <Skeleton className='h-5 w-20' />
      </h2>
      <h2 className='text-xl font-semibold'>
        <Skeleton className='w-16 h-5' />
      </h2>
      <Separator className='lg:w-1/2' />
      <div className='text-lg font-normal lg:w-1/2'>
        <Skeleton className='w-full h-52' />
      </div>
    </>
  );
}
