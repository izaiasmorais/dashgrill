import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function ChartTypeSelect() {
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="This year" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value={"area"}>Area</SelectItem>
			</SelectContent>
		</Select>
	);
}
