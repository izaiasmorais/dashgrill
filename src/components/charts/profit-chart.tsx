"use client";

import React, { useState, useEffect } from "react";
import { useStore } from "@/store";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

export default function ProfitChart() {
	const type = useStore((state) => state.type);

	const [chartOptions, setChartOptions] = useState<ApexCharts.ApexOptions>({
		series: [
			{
				name: "Profit",
				data: [
					3450, 2568, 4190, 3900, 1780, 3025, 2650, 4180, 3820, 2975, 4250,
					3540,
				],
			},
		],
		chart: {
			height: 350,
			type,
		},
		stroke: {
			curve: "smooth",
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			type: "category",
			categories: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
		},
		tooltip: {
			x: {
				format: "month",
			},
		},
	});

	return (
		<div>
			<ReactApexChart
				options={chartOptions}
				series={chartOptions.series}
				type="line"
				height={350}
			/>
		</div>
	);
}
