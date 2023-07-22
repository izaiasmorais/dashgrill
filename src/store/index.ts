import { create } from "zustand";

interface ChartState {
	type: string;
	update: (type: string) => void;
}

export const useStore = create<ChartState>((set) => {
	return {
		type: "Area",

		update: (type: string) => {
			set({ type });
		},
	};
});
