import React, { ReactNode } from "react";

/**
 * Checkboxes allow users to complete tasks that involve making choices such as selecting options. Can be styled as a switch, a visual toggle between two mutually exclusive states — on and off.
 */
export class Checkbox extends React.Component<CheckboxProps> {}

export interface CheckboxProps {
	/**
	 * A React style object that will be applied to the CheckBox element.
	 */
	style?: React.CSSProperties;

	/**
	 * A classname string that will be applied to the CheckBox element.
	 */
	className?: string;

	/**
	 * A React style object that will be applied to the label element.
	 */
	labelStyle?: React.CSSProperties;

	/**
	 * A classname string that will be applied to the label element.
	 */
	labelClassName?: string;

	/**
	 * A label that will be shown next to the CheckBox.
	 */
	label?: ReactNode | Array<ReactNode>;

	/**
	 * A label that will be shown next to the CheckBox.
	 */
	children?: ReactNode | Array<ReactNode>;

	/**
	 * This will be called when the state of the CheckBox changes.
	 */
	onChange?: (e: any) => any;

	/**
	 * Changes the rendering to a switch-/toggle-style.
	 */
	toggleButton?: boolean;

	/**
	 * Wether the CheckBox is checked. Makes it a controlled input.
	 */
	checked?: boolean;

	/**
	 * Wether the CheckBox is checked by default. Do not use it with the checked-prop.
	 */
	defaultChecked?: boolean;

	/**
	 * Disables any interactions with the CheckBox and changes the style to a disabled look.
	 */
	disabled?: boolean;

	/**
	 * Set the contents of the label with a raw HTML string.
	 */
	dangerouslySetLabel?: { __html: string };

	/**
	 * Wether to stop propagation of click events.
	 */
	stopPropagation?: boolean;

	/**
	 * The HTML id of the input element.
	 */
	id?: number | string;
}
