export function TextArea({
	style,
	disabled = false,
	className,
	placeholder,
	required,
	design = 0,
	onChange,
	onBlur,
	defaultValue,
	value,
	onKeyUp,
	onKeyDown,
	autogrow,
	reference,
	stopPropagation = false,
}: {
	style?: React.CSSProperties;
	disabled?: boolean;
	className?: string;
	placeholder?: string;
	required?: boolean;
	design?: 0 | 1;
	onChange?: (e: string) => void;
	onBlur?: (e: string) => void;
	defaultValue?: string;
	value?: string;
	onKeyUp?: Function;
	onKeyDown?: Function;
	autogrow?: boolean;
	reference?: Function;
	stopPropagation?: boolean;
}): JSX.Element;
