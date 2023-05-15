import React, { ReactNode } from "react";

/**
 * A radio button that allows to select one of multiple options.
 */
export class RadioButton extends React.Component<RadioButtonProps> {}

export interface RadioButtonProps {
	/**
	 * The HTML id of the <input>-element.
	 */
	id?: string;

	/**
	 * Multiple radio buttons with the same name belong to one group. Only one radio button in a group can be active at a time.
	 */
	name?: string;

	/**
	 * Wether the radio button is currently active.
	 */
	checked?: boolean;

	/**
	 * A function that is called when the radio button gets checked. Receives the value-prop as its first argument.
	 */
	onChange?: (e: any) => any;

	/**
	 * Disables any user interaction and renders the radio button in a disabled style.
	 */
	disabled?: boolean;

	/**
	 * A string or ReactNode that will be the label.
	 */
	children?: ReactNode;

	/**
	 * A value that will be sent to the onChange-callback as its first argument.
	 */
	value?: string | number | boolean;

	/**
	 * A classname string that will be applied to the container element.
	 */
	className?: string;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;

	/**
	 * A React style object that will be applied to the container element.
	 */
	style?: React.CSSProperties;
}
