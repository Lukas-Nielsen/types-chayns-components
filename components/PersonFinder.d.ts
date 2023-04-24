export function PersonFinder({
	placeholder = "",
	multiple = false,
	showPersons = true,
	showSites = false,
	showUacGroups = false,
	showKnownPersons = false,
	uacId,
	locationId,
	reducerFunction,
	// context 	{ Provider: function, Consumer: object } 	PersonsContext 	,
	onChange,
	disableFriends,
	className,
	defaultValue,
	defaultValues,
	onAdd,
	onRemove,
	onInput,
	contextProps,
	max,
	values,
	value,
	hasOpenCloseIcon = false,
	filterSelected = false,
	hideVerifiedIcon = false,
	minCharCount,
}: {
	placeholder?: string;
	multiple?: boolean;
	showPersons?: boolean;
	showSites?: boolean;
	showUacGroups?: boolean;
	showKnownPersons?: boolean;
	uacId?: number;
	locationId?: number;
	reducerFunction?: Function;
	// context? :	{ Provider: function, Consumer: object } 	PersonsContext 	;
	onChange?: (e: Value) => void;
	disableFriends?: boolean;
	className?: string;
	defaultValue?: Value | string;
	defaultValues?: Value[];
	onAdd?: Function;
	onRemove?: Function;
	onInput?: Function;
	contextProps?: object;
	max?: number;
	values?: [];
	value?: string;
	hasOpenCloseIcon?: boolean;
	filterSelected?: boolean;
	hideVerifiedIcon?: boolean;
	minCharCount?: number;
}): JSX.Element;

interface Value {
	id?: number
	imageUrl: string
	name?: string
	type: "GROUP" | "PERSON"
	firstName?: string
	fullName?: string
	isFriend?: boolean
	lastName?: string
	personId?: string
	userId?: number
	verificationState?: boolean
}
