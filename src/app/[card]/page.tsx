"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { LoadingCard } from "../loading";

interface NasaAsset {
  collection: {
    version: string;
    href: string;
    items: {
      href: string;
    }[];
  };
}

interface NasaMetadata {
  "AVAIL:Album": string[];
  "AVAIL:DateCreated": string;
  "AVAIL:Description": string;
  "AVAIL:Title": string;
  "AVAIL:MediaType": string;
  "AVAIL:NASAID": string;
  "AVAIL:Center": string;
}

export default function Page({
  params,
}: {
  params: Promise<{ card: string }>;
}) {
  const router = useRouter();
  const [nasaAsset, setNasaAsset] = useState<NasaAsset>();
  const [nasaMetadata, setNasaMetadata] = useState<NasaMetadata>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNasaItem() {
      const card = (await params).card;
      const imageResponse = await fetch(
        `https://images-api.nasa.gov/asset/${card}`
      );
      const metadataResponse = await fetch(
        `https://images-assets.nasa.gov/image/${card}/metadata.json`
      );
      const imageData: NasaAsset = await imageResponse.json();
      const metadataData: NasaMetadata = await metadataResponse.json();

      setNasaAsset(imageData);
      setNasaMetadata(metadataData);
      setLoading(false);
    }

    fetchNasaItem();
  }, [params]);

  if (loading || !nasaAsset || !nasaMetadata) {
    return (
      <div className="p-4 flex flex-col flex-grow min-h-[calc(100vh-10rem)]">
        <ChevronLeft
          className="hover:cursor-pointer w-16 h-16"
          onClick={() => router.back()}
        />
        <main className="flex flex-col items-center gap-2 rounded-sm border-2 border-neutral-500 p-4 flex-grow h-full">
          <LoadingCard />
        </main>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col flex-grow min-h-[calc(100vh-10rem)]">
      <ChevronLeft
        className="hover:cursor-pointer w-16 h-16"
        onClick={() => router.back()}
      />
      <main className="flex flex-col items-center gap-2 rounded-sm border-2 border-neutral-500 p-4 flex-grow h-full">
        <h1 className="text-5xl font-bold">{nasaMetadata["AVAIL:Title"]}</h1>
        <Image
          src={nasaAsset.collection.items[0].href}
          alt="NASA Image"
          width={500}
          height={500}
          className="mt-4 rounded-md"
        />
        <h2 className="text-lg font-normal">
          {new Date(nasaMetadata["AVAIL:DateCreated"]).toLocaleDateString()}
        </h2>
        <h2 className="text-xl font-semibold">{`Center: ${nasaMetadata["AVAIL:Center"]}`}</h2>
        <Separator className="lg:w-1/2" />
        <p className="text-lg font-normal lg:w-1/2">
          {nasaMetadata["AVAIL:Description"]}
        </p>
      </main>
    </div>
  );
}
