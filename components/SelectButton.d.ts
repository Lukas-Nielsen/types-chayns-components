import React from "react";

export class SelectButton extends React.Component<SelectButtonProps> {}

export interface SelectButtonProps {
	/**
	 * A callback that is invoked when the selection has changed.
	 */
	onSelect?: (e: { buttonType: number; selection: any[] }) => void;

	/**
	 * A string that will be shown as a title in the selection dialog.
	 */
	title?: string;

	/**
	 * A string that will be shown as a description in the selection dialog.
	 */
	description?: string;

	/**
	 * Disables any user interaction and renders the button in a disabled style.
	 */
	disabled?: boolean;

	/**
	 * The content of the button.
	 */
	label?: string;

	/**
	 * An array of items to select from. Items are provided in an object shape.
	 */
	list: object[];

	/**
	 * The property name of the list item objects that will uniquely identify each one.
	 */
	listKey?: string;

	/**
	 * The property name of the list item objects that will be shown as its name in the selection dialog.
	 */
	listValue?: string;

	/**
	 * The property name of the list item objects that mark an item as selected.
	 */
	selectedFlag?: string;

	/**
	 * Wether multiple options can be selected.
	 */
	multiSelect?: boolean;

	/**
	 * Wether a search field should be shown in the selection dialog.
	 */
	quickFind?: boolean;

	/**
	 * Adds a checkbox with the given text of this property which allows you to enable and disable all elements of the select list at the same time. Based on the list items isSelected state the checkbox is enabled or disabled. If all elements of the list are selected, the checkbox will be checked.
	 */
	selectAllButton?: string;

	/**
	 * A classname string that will be applied to the button.
	 */
	className?: string;

	/**
	 * A React style object that will be applied ot the button
	 */
	style?: React.CSSProperties;

	/**
	 * Wether the current selection should be shown in the button. Use a number to specify the maximum amount of items selected.
	 */
	showSelection?: boolean | number;

	/**
	 * Wether the current selection should be shown in the dialog list.
	 */
	showListSelection?: boolean;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;
}
