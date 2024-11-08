import { create } from "zustand";
import { NasaItem } from "@/components/NasaCardsGrid";

interface NasaStore {
  selectedItem: NasaItem | null;
  setSelectedItem: (item: NasaItem | null) => void;
}

const useNasaStore = create<NasaStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export { useNasaStore };
