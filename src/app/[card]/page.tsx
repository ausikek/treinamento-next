"use client";

import Image from "next/image";
import { useNasaStore } from "../hooks/useNasa";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

export default function Page() {
  const nasaItem = useNasaStore((state) => state.selectedItem);
  const router = useRouter();

  useEffect(() => {
    if (!nasaItem) {
      router.push("/");
    }
  }, [nasaItem, router]);

  if (!nasaItem) return <h1 className="h-screen">Redirecting...</h1>;

  return (
    <div className="p-4 flex flex-col flex-grow min-h-[calc(100vh-10rem)]">
      <ChevronLeft
        className="hover:cursor-pointer w-16 h-16"
        onClick={() => router.back()}
      />
      <main className="flex flex-col items-center gap-2 rounded-sm border-2 border-neutral-500 p-4 flex-grow h-full">
        <h1 className="text-5xl font-bold">{nasaItem.data[0].title}</h1>
        <Image
          src={nasaItem.links[0].href}
          alt={nasaItem.data[0].title}
          width={500}
          height={500}
          className="mt-4 rounded-md"
        />
        <h2 className="text-lg font-normal">
          {new Date(nasaItem.data[0].date_created).toLocaleDateString()}
        </h2>
        <h2 className="text-xl font-semibold">{`Center: ${nasaItem.data[0].center}`}</h2>
        <Separator className="lg:w-1/2" />
        <p className="text-lg font-normal lg:w-1/2">
          {nasaItem.data[0].description}
        </p>
      </main>
    </div>
  );
}
