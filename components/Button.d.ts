import { MouseEventHandler, ReactNode } from "react";

export function Button({
	children,
	chooseButton = false,
	disabled = false,
	onClick,
	className,
	icon,
	secondary = false,
	stopPropagation = false,
	type = "button",
}: {
	children: ReactNode;
	chooseButton?: boolean;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	icon?: string | object;
	secondary?: boolean;
	stopPropagation?: boolean;
	type?: "button" | "submit" | "reset";
}): JSX.Element;
