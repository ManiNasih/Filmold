import { create } from "zustand";

export const useSearchTermStore = create((set) => ({
  searchTerm: "",
  setSearchTerm: (title) => set(() => ({ searchTerm: title })),
}));
