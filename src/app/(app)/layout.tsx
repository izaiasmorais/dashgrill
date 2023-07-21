import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<main className="w-full">
				<Header />
				<div className="flex flex-1 flex-col gap-4 p-6">{children}</div>
			</main>
		</div>
	);
}
