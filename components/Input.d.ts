import { HTMLInputTypeAttribute, ReactNode } from "react";

export function Input({
	className = "",
	onKeyUp,
	onKeyDown,
	onEnter,
	onChange,
	onBlur,
	onFocus,
	regExp,
	style,
	placeholder = "",
	value,
	defaultValue,
	invalid = false,
	type = "text",
	inputRef,
	icon,
	onIconClick,
	wrapperRef,
	dynamic = false,
	customProps,
	id,
	stopPropagation = false,
	required = false,
	disabled = false,
	clearIcon = false,
	design,
	iconLeft,
	left,
	right,
	invalidMessage,
	emptyValue,
	autoComplete = "off",
}: {
	className?: string;
	onKeyUp?: Function;
	onKeyDown?: Function;
	onEnter?: Function;
	onChange?: (e: string) => void;
	onBlur?: Function;
	onFocus?: Function;
	regExp?: RegExp;
	style?: React.CSSProperties;
	placeholder?: string;
	value?: string | number;
	defaultValue?: string | number;
	invalid?: boolean;
	type?: HTMLInputTypeAttribute;
	inputRef?: Function;
	icon?: string | object;
	onIconClick?: Function;
	wrapperRef?: Function;
	dynamic?: boolean | number;
	customProps?: object;
	id?: string;
	stopPropagation?: boolean;
	required?: boolean;
	disabled?: boolean;
	clearIcon?: boolean;
	design?: number;
	iconLeft?: string | object;
	left?: ReactNode;
	right?: ReactNode;
	invalidMessage?: string;
	emptyValue?: string | number;
	autoComplete?: string;
}): JSX.Element;
