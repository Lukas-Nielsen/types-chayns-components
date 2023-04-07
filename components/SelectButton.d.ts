export function SelectButton({
	onSelect,
	title = "",
	description = "",
	disabled = false,
	label = "Select",
	list,
	listKey = "name",
	listValue = "value",
	selectedFlag = "isSelected",
	multiSelect = false,
	quickFind = false,
	selectAllButton,
	className,
	style,
	showSelection = true,
	showListSelection = true,
	stopPropagation = false,
}: {
	onSelect?: (e: { buttonType: number; selection: object[] }) => void;
	title?: string;
	description?: string;
	disabled?: boolean;
	label?: string;
	list: object[];
	listKey?: string;
	listValue?: string;
	selectedFlag?: string;
	multiSelect?: boolean;
	quickFind?: boolean;
	selectAllButton?: string;
	className?: string;
	style?: React.CSSProperties;
	showSelection?: boolean | number;
	showListSelection?: boolean;
	stopPropagation?: boolean;
}): JSX.Element;
