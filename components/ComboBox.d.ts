import React from "react";

/**
 * A button with a dropdown that contains a scrollable list of distinct values from which people can choose.
 */
export class ComboBox extends React.Component<ComboBoxProps> {}

export interface ComboBoxProps {
	/**
	 * This callback is called when an item is selected.
	 */
	onSelect?: (e: any) => any;

	/**
	 * Disables any interactions and styles the combobox with a disabled style.
	 */
	disabled?: boolean;

	/**
	 * A placeholder value shown inside the combobox.
	 */
	label?: string;

	/**
	 * An array of values to select from.
	 */
	list: object[];

	/**
	 * The name of the property on the list objects that uniquely identifies an item.
	 */
	listKey: string;

	/**
	 * The name of the property on the list objects that is shown as its name.
	 */
	listValue: string;

	/**
	 * A classname string that will be applied to the Button component and the overlay.
	 */
	className?: string;

	/**
	 * The default value of the combobox. This does not work in combination with the label or value props.
	 */
	defaultValue?: string;

	/**
	 * Wether to stop the propagation of click events.
	 */
	stopPropagation?: boolean;

	/**
	 * The parent component of the combobox overlay.
	 */
	parent?: any;

	/**
	 * A React style object that will be applied to the Button component and the overlay.
	 */
	style?: React.CSSProperties;

	/**
	 * The value of the combobox. This does not work in combination with the  label-prop.
	 */
	value?: string | number;
}
