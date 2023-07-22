import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Monitor, Moon, Sun } from "lucide-react";

export function ThemeSelect() {
	return (
		<Select>
			<SelectTrigger className="text-black">
				<SelectValue>
					<Moon />
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light" className="flex items-center">
					<Sun />
					Light
				</SelectItem>
			</SelectContent>
		</Select>
	);
}
