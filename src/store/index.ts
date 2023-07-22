import { create } from "zustand";

interface ChartState {
	type:
		| "line"
		| "area"
		| "bar"
		| "pie"
		| "donut"
		| "radialBar"
		| "scatter"
		| "bubble"
		| "heatmap"
		| "candlestick"
		| "boxPlot"
		| "radar"
		| "polarArea"
		| "rangeBar"
		| "rangeArea"
		| "treemap";
	update: (type: string) => void;
}

export const useStore = create<ChartState>((set) => {
	return {
		type: "line",

		update: (type: any) => {
			set({ type });
		},
	};
});
