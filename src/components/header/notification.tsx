"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export function Notification() {
	return (
		<div className="flex justify-between gap-10 items-center cursor-pointer">
			<div className="flex gap-2">
				<Avatar>
					<AvatarImage
						className="w-10 h-10 rounded-full"
						src="https://github.com/diego3g.png"
					/>
					<AvatarFallback>DF</AvatarFallback>
				</Avatar>

				<div className="flex flex-col justify-start gap-1 ">
					<p className="flex items-center text-sm gap-1">
						<span className="font-semibold">@diego3g </span>
						seguiu você.
					</p>
					<span className="text-xs text-zinc-500">Hoje 14:12</span>
				</div>
			</div>

			<div className="flex flex-col gap-2 items-end">
				<div className="bg-blue-500 rounded-full w-2 h-2" />
				<span className="text-zinc-500 text-xs">2 hours ago.</span>
			</div>
		</div>
	);
}
