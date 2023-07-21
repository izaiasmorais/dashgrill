import {
	CircleDollarSign,
	HeartHandshake,
	Home,
	PackageSearch,
	Sandwich,
	ScrollText,
	Users,
	Wallet,
} from "lucide-react";
import { Item } from "./sidebar-item";

export function Sidebar() {
	return (
		<aside className="h-screen w-[300px] border-r p-4">
			<h1 className="text-2xl font-semibold flex items-center gap-2">
				<Sandwich />
				dashgrill
			</h1>
			<div className="mt-12 flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">GENERAL</span>
				<Item title="Dashboard" href="/" icon={<Home size={20} />} />
				<Item title="Sales" href="/sales" icon={<Wallet size={20} />} />
				<Item title="Clients" href="/clients" icon={<Users size={20} />} />
				<Item
					title="Products"
					href="/products"
					icon={<PackageSearch size={20} />}
				/>
				<Item
					title="Online Store"
					href="/online-store"
					icon={<Home size={20} />}
				/>
			</div>

			<div className="mt-6 flex flex-col gap-1">
				<span className="text-sm font-semibold mb-1">BOOST</span>
				<Item title="Coupons" href="/coupons" icon={<ScrollText size={20} />} />
				<Item
					title="Loyalty"
					href="/loyalty"
					icon={<HeartHandshake size={20} />}
				/>
			</div>
		</aside>
	);
}
