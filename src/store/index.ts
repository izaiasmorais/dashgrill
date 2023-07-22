import { create } from "zustand";

interface ChartState {
	type: string;
	update: (type: string) => void;
}

export const useStore = create<ChartState>((set) => {
	return {
		type: "line",

		update: (type: string) => {
			set({ type });
		},
	};
});
