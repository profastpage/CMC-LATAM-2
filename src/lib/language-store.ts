import { create } from "zustand";

export type Language = "es" | "en";

interface LanguageState {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: "es",
  toggleLanguage: () =>
    set((state) => ({ lang: state.lang === "es" ? "en" : "es" })),
  setLanguage: (lang) => set({ lang }),
}));
