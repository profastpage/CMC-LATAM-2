import { create } from "zustand";

export type Language = "es" | "en";
export type Theme = "light" | "dark";

interface AppState {
  lang: Language;
  theme: Theme;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useAppStore = create<AppState>((set) => ({
  lang: "es",
  theme: "light",
  toggleLanguage: () =>
    set((state) => ({ lang: state.lang === "es" ? "en" : "es" })),
  setLanguage: (lang) => set({ lang }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setTheme: (theme) => set({ theme }),
}));
