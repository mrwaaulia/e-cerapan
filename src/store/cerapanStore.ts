import { create } from "zustand";

type CerapanStore = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

export const useCerapanStore = create<CerapanStore>((set) => ({
  currentStep: 1,

  setCurrentStep: (step) => {
    set({ currentStep: step });
  },
}));
