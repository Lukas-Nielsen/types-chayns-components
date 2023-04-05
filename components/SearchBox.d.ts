import { CSSProperties, ReactNode } from "react";

export function SearchBox({
	onSelect,
	disabled = false,
	list,
	listKey = "key",
	listValue = "value",
	sortKey,
	className,
	defaultValue,
	stopPropagation = false,
	parent,
	style,
	value,
	inputValue,
	showListWithoutInput = false,
	inputDefaultValue,
	onChange,
	autoSelectFirst = false,
	highlightInputInResult = true,
	addInputToList = false,
	emptyKey,
	hasOpenCloseIcon = false,
	onBlur,
}: {
	onSelect?: Function;
	disabled?: boolean;
	list?: object[] | string[] | number[];
	listKey?: string;
	listValue?: string;
	sortKey?: string;
	className?: string;
	defaultValue?: string | number;
	stopPropagation?: boolean;
	parent?: Function | ReactNode;
	style?: CSSProperties;
	value?: string | number;
	inputValue?: string;
	showListWithoutInput?: boolean;
	inputDefaultValue?: string;
	onChange?: (e: string) => void;
	autoSelectFirst?: boolean;
	highlightInputInResult?: boolean;
	addInputToList?: boolean;
	emptyKey?: string | number;
	hasOpenCloseIcon?: boolean;
	onBlur?: Function;
}): JSX.Element;
