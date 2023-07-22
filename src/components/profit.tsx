import Chart from "./area-chart";
import { YearSelect } from "./year-select";
import { Card } from "./ui/card";

export function ProfitChart() {
	return (
		<Card className="flex-1 flex flex-col p-6 gap-6">
			<div className="flex justify-between items-center">
				<div>
					<h3 className="font-semibold text-1xl">Profit</h3>
					<p className="text-sm text-slate-500">
						Your profit in the last 12 months.
					</p>
				</div>
				<YearSelect />
			</div>
			<Chart />
		</Card>
	);
}