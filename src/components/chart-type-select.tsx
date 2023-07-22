"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/store";

export function ChartTypeSelect() {
	const update = useStore((state) => state.update);
	const type = useStore((state) => state.type);

	const types = ["Bar", "Area", "Line", "Scatter"];

	return (
		<Select value={type.toLowerCase()} onValueChange={(e) => update(e)}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Chart type" />
			</SelectTrigger>

			<SelectContent>
				{types.map((type) => (
					<SelectItem key={type.toLowerCase()} value={type.toLowerCase()}>
						{type}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
