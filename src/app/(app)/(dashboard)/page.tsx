import { ProfitChart } from "@/components/profit";
import { RecentSales } from "@/components/recent-sales";
import { Summary } from "@/components/summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
	return (
		<main>
			<Tabs defaultValue="this" className="w-full">
				<TabsList>
					<TabsTrigger value="this">This month</TabsTrigger>
					<TabsTrigger value="last">Last month</TabsTrigger>
				</TabsList>

				<TabsContent value="this" className="flex flex-col gap-6">
					<Summary />
					<div className="flex gap-6">
						<ProfitChart />
						<RecentSales />
					</div>
				</TabsContent>

				<TabsContent value="last" className="flex flex-col gap-6"></TabsContent>
			</Tabs>
		</main>
	);
}
