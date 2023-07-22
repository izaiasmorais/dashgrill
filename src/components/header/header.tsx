import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Moon, Bell } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
	return (
		<header className="flex w-full justify-between py-3 px-6 border-b">
			<Input placeholder="Search anything..." className="w-[300px]" />
			<div className="flex gap-2">
				<Button className="bg-white hover:bg-slate-50 border p-2">
					<Bell color="black" size={20} />
				</Button>

				<ThemeSwitcher />

				<Avatar>
					<AvatarImage src="https://github.com/izaiasmorais.png" />
					<AvatarFallback>IZ</AvatarFallback>
				</Avatar>
			</div>
		</header>
	);
}
