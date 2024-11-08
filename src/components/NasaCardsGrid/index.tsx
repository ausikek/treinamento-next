"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NasaCards } from "../NasaCards";
import { useNasaStore } from "@/app/hooks/useNasa";

export interface NasaResponse {
  collection: {
    items: NasaItem[];
  };
}

export interface NasaItem {
  data: {
    album: string[];
    center: string;
    date_created: string;
    description: string;
    title: string;
  }[];
  links: {
    href: string;
    rel: string;
  }[];
}

const NasaCardsGrid = () => {
  const [nasaData, setNasaData] = useState<NasaResponse>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchNasaData() {
      const images = await fetch("https://images-api.nasa.gov/album/Mars");
      const data: NasaResponse = await images.json();
      setNasaData(data);
      setLoading(false);
    }

    fetchNasaData();
  }, []);

  const handleCardClick = (item: NasaItem) => {
    useNasaStore.getState().setSelectedItem(item);
    const uniqueId = encodeURIComponent(item.data[0].title);
    router.push(`/${uniqueId}`);
  };

  return (
    <main className="p-4 flex flex-col items-center gap-5">
      <h1 className="text-space text-3xl">Nasa Mars Odyssey</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {loading ? (
          <h1 className="text-8xl h-screen">Loading...</h1>
        ) : (
          nasaData?.collection.items.map((item, index) => {
            return (
              <NasaCards
                key={index}
                title={item.data[0].title}
                center={item.data[0].center}
                image={item.links[0].href}
                handleClick={() => handleCardClick(item)}
              />
            );
          })
        )}
      </div>
    </main>
  );
};

export { NasaCardsGrid };
