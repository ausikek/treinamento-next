"use client";

import Image from "next/image";
import { useNasaStore } from "../hooks/useNasa";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

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
    <div className="p-4">
      <h1
        className="hover:cursor-pointer mb-5 text-6xl w-1"
        onClick={() => router.back()}
      >
        {"<"}
      </h1>
      <main className="flex flex-col items-center gap-2 rounded-sm border-2 border-neutral-500 p-4">
        <h1 className="text-5xl font-bold">{nasaItem.data[0].title}</h1>
        <Image
          src={nasaItem.links[0].href}
          alt={nasaItem.data[0].title}
          width={500}
          height={500}
          className="mt-4"
        />
        <h2 className="text-lg font-normal">
          {new Date(nasaItem.data[0].date_created).toLocaleDateString()}
        </h2>
        <h2 className="text-xl font-semibold">{`Center: ${nasaItem.data[0].center}`}</h2>
        <Separator className="w-1/2" />
        <p className="text-lg font-normal w-1/2">
          {nasaItem.data[0].description}
        </p>
      </main>
    </div>
  );
}
