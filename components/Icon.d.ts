import { ReactNode } from "react";

export function Icon({
	icon,
	className = "",
	style,
	onClick,
	disabled = false,
	stopPropagation = false,
}: {
	icon: string | { iconName: string; prefix: string } | Array<string>;
	className?: string;
	style?: React.CSSProperties;
	onClick?: Function;
	disabled?: boolean;
	stopPropagation?: boolean;
}): JSX.Element;
