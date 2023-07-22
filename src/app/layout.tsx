import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dashgrill",
	description: "Best restaurant dashboard out there",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="antialiased">
			<head>
				<link rel="icon" href="/next.jpg" sizes="any" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
