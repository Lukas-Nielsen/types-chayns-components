import React, { CSSProperties, ReactNode } from "react";

export class SearchBox extends React.Component<SearchBoxProps> {}

export interface SearchBoxProps {
	/**
	 * A callback that will be invoked when a value was selected.
	 */
	onSelect?: (e: string) => void;

	/**
	 * Disables any user interaction and renders the search box in a disabled style.
	 */
	disabled?: boolean;

	/**
	 * An array of items to select from.
	 */
	list?: object[] | string[] | number[];

	/**
	 * The property name of a unique identifier in the list items.
	 */
	listKey?: string;

	/**
	 * The property name of the name of the list items that will be shown in the dropdown.
	 */
	listValue?: string;

	/**
	 * The property name to use for sorting the list. Default is listValue
	 */
	sortKey?: string;

	/**
	 * A classname string that will be set on the container component.
	 */
	className?: string;

	/**
	 * The default value of the search box as a key to one of the list items.
	 */
	defaultValue?: string | number;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;

	/**
	 * A DOM element into which the overlay will be rendered.
	 */
	parent?: (e: any) => void | ReactNode;

	/**
	 * A React style object that will be applied to the outer-most container.
	 */
	style?: CSSProperties;

	/**
	 * The current value of the search box as a key to one of the list items.
	 */
	value?: string | number;

	/**
	 * The current value of the text input.
	 */
	inputValue?: string;

	/**
	 * Wether the list should be shown if there is no user input.
	 */
	showListWithoutInput?: boolean;

	/**
	 * The default value of the input field. Has no effect when used with the inputValue-prop.
	 */
	inputDefaultValue?: string;

	/**
	 * The onChange-callback for the input element.
	 */
	onChange?: (e: string) => void;

	/**
	 * Wether the first list item should be automatically selected.
	 */
	autoSelectFirst?: boolean;

	/**
	 * Whether the search term should be marked in the selection
	 */
	highlightInputInResult?: boolean;

	/**
	 * Whether the input value should be added to the end of the result list. Allows also values which are not in the list.
	 */
	addInputToList?: boolean;

	/**
	 * The key of the default value if nothing is selected or typed into the input.
	 */
	emptyKey?: string | number;

	/**
	 * Whether the input should have a small icon to open and close the result list.
	 */
	hasOpenCloseIcon?: boolean;

	/**
	 * A callback that will be invoked when the user leaves the input.
	 */
	onBlur?: (e: any) => void;
}
