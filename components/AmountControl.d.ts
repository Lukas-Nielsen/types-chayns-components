import React from "react";

/**
 * The AmountControl is a three-segment control used to increase or decrease an incremental value.
 */
export class AmountControl extends React.Component<AmountControlProps> {}

export interface AmountControlProps {
	/**
	 * This text will be shown in the button when the amount-prop is 0.
	 */
	buttonText?: string;

	/**
	 * This component works as a controlled input and this prop defines its current state.
	 */
	amount?: number;

	/**
	 * This callback will be called when the amount is changed by the user.
	 */
	onChange?: (e: any) => any;

	/**
	 * Alias for onChange.
	 */
	onInput?: (e: any) => any;

	/**
	 * Called when the user clicks the increment-button.
	 */
	onAdd?: (e: any) => any;

	/**
	 * Called when the user clicks the decrement-button.
	 */
	onRemove?: (e: any) => any;

	/**
	 * Disables any interaction and switches to a disabled style.
	 */
	disabled?: boolean;

	/**
	 * Disables the input field and forces the user to use the buttons to control the value.
	 */
	disableInput?: boolean;

	/**
	 * Disables the increment-button and disables the ability to increment the value.
	 */
	disableAdd?: boolean;

	/**
	 * Disables the decrement-button and disables the ability to decrement the value.
	 */
	disableRemove?: boolean;

	/**
	 * A classname that is applied to the wrapper of the component.
	 */
	className?: string;

	/**
	 * Shows an input field once the amount is greater than 10.
	 */
	autoInput?: boolean;

	/**
	 * A function that returns the content of the button.
	 */
	buttonFormatHandler?: (e: any) => any;

	/**
	 * Whether to show the input.
	 */
	showInput?: boolean;

	/**
	 * Whether the add button should be shown/rendered.
	 */
	showAddButton?: boolean;

	/**
	 * Displays an icon on the left side of the button if the amount is 0. Supply a FontAwesome-string like "fa fa-plane".
	 */
	icon?: string | object;

	/**
	 * The icon shown on the increment-button.
	 */
	plusIcon?: string | object;

	/**
	 * The icon shown on the decrement-button.
	 */
	minusIcon?: string | object;

	/**
	 * The icon the reset the amount to 0.
	 */
	removeIcon?: string | object;

	/**
	 * The color of the remove icon.
	 */
	removeColor?: string;

	/**
	 * The color of the icon in the increment-button.
	 */
	addColor?: string;

	/**
	 * The color of the icon to the left of the button.
	 */
	iconColor?: string;

	/**
	 * Multiple AmountControl with the same equalize-prop will sync their width.
	 */
	equalize?: string;

	/**
	 * Enables the input autofocus.
	 */
	focusOnClick?: boolean;

	/**
	 * The width of the AmountControl content.
	 */
	contentWidth?: number;

	/**
	 * The minimum value of the AmountControl (the input field is not validated).
	 */
	min?: number;

	/**
	 * The maximum value of the AmountControl (the input field is not validated).
	 */
	max?: number;

	/**
	 * Stop propagation of click events to parent components.
	 */
	stopPropagation?: boolean;

	/**
	 * Always show the increment and decrement buttons.
	 */
	hasAlwaysControls?: boolean;
}
