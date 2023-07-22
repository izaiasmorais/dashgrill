"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

interface ChartProps {
	type?: string;
}

export default function Chart({ type = "area" }: ChartProps) {
	useEffect(() => {
		const options = {
			series: [
				{
					name: "Profit",
					data: [
						3450, 2568, 4190, 3900, 1780, 3025, 2650, 4180, 3820, 2975, 4250,
						3540,
					],
					color: "#000",
				},
			],
			chart: {
				height: 350,
				type,
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			xaxis: {
				type: "string",
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
		};

		const chart = new ApexCharts(document.querySelector("#chart"), options);
		chart.render();

		return () => {
			chart.destroy();
		};
	}, [type]);

	return <div id="chart" />;
}
