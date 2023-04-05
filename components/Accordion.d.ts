import { ReactNode } from "react";

export function Accordion({
	head,
	headMultiline = false,
	headClassNames,
	headCustomAttributes,
	children,
	right,
	renderClosed = false,
	isWrapped = false,
	dataGroup,
	className = "",
	id,
	style,
	styleBody,
	onOpen,
	onClose,
	defaultOpened,
	reference,
	autogrow = true,
	open,
	icon = "ts-angle-right",
	noRotate = false,
	fixed = false,
	noIcon = false,
	onSearch,
	onSearchEnter,
	searchPlaceholder = "",
	searchValue,
	removeContentClosed = false,
	onClick,
	disabled = false,
	controlled = false,
}: {
	head: ReactNode | { open: ReactNode; close: ReactNode };
	headMultiline?: boolean;
	headClassNames?: string | Array<string> | object;
	headCustomAttributes?: object;
	children: ReactNode;
	right?: ReactNode | { open: ReactNode; close: ReactNode };
	renderClosed?: boolean;
	isWrapped?: boolean;
	dataGroup?: string;
	className?: string;
	id?: string;
	style?: React.CSSProperties;
	styleBody?: React.CSSProperties;
	onOpen?: Function;
	onClose?: Function;
	defaultOpened?: boolean;
	reference?: Function;
	autogrow?: boolean;
	open?: boolean;
	icon?: object | string | ReactNode;
	noRotate?: boolean;
	fixed?: boolean;
	noIcon?: boolean;
	onSearch?: Function;
	onSearchEnter?: Function;
	searchPlaceholder?: string;
	searchValue?: string;
	removeContentClosed?: boolean;
	onClick?: Function;
	disabled?: boolean;
	controlled?: boolean;
}): JSX.Element;
