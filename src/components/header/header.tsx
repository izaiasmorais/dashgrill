import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";

export function Header() {
	return (
		<header className="flex w-full justify-between py-3 px-6 border-b">
			<Input placeholder="Search anything..." className="w-[300px]" />
			<div className="flex gap-2">
				<Notifications />

				<ThemeSwitcher />

				<Avatar>
					<AvatarImage src="https://github.com/izaiasmorais.png" />
					<AvatarFallback>IZ</AvatarFallback>
				</Avatar>
			</div>
		</header>
	);
}
