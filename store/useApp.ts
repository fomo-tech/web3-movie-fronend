import { create } from "zustand";

interface AppState {
  isShowSearchPopup: boolean;
  toggleSearchPopup: () => void;
}
export const useApp = create<AppState>((set) => ({
  isShowSearchPopup: false,
  toggleSearchPopup: () =>
    set((state) => ({ isShowSearchPopup: !state.isShowSearchPopup })),
}));
