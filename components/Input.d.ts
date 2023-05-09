import React, { HTMLInputTypeAttribute, ReactNode } from "react";

export class Input extends React.Component<InputProps> {}

export interface InputProps {
	/**
	 * A classname string that will be applied to the <input>-element
	 */
	className?: string;

	/**
	 * A callback for the keyup-event on the input.
	 */
	onKeyUp?: (e: any) => void;

	/**
	 * A callback for the keyup-event on the input.
	 */
	onKeyDown?: (e: any) => void;

	/**
	 * A callback for when the users presses the Enter-key while the input is focused.
	 */
	onEnter?: (e: any) => void;

	/**
	 * Called when the inputs content was changed. If the regExp-prop is set, this callback receives a second argument indicating wether the input is valid or not.
	 */
	onChange?: (e: string) => void;

	/**
	 * A callback for the blur-event on the input.
	 */
	onBlur?: (e: any) => void;

	/**
	 * A callback for the focus-event on the input.
	 */
	onFocus?: (e: any) => void;

	/**
	 * A regular expression that will check if the input is valid. If the input is not valid, this component will show it to the user.
	 */
	regExp?: RegExp;

	/**
	 * A React style object that is applied to the <input>-element.
	 */
	style?: React.CSSProperties;

	/**
	 * An animated placeholder that is shown when the input is empty.
	 */
	placeholder?: string;

	/**
	 * The current value of the input field.
	 */
	value?: string | number;

	/**
	 * The initial value of the input field. Has no effect when using the value-prop.
	 */
	defaultValue?: string | number;

	/**
	 * Wether the input should be marked as invalid.
	 */
	invalid?: boolean;

	/**
	 * The input type that is set on the <input>-element (e.g. text, password, etc.)
	 */
	type?: HTMLInputTypeAttribute;

	/**
	 * A funtion that receives the reference to the <input>-element.
	 */
	inputRef?: (e: any) => void;

	/**
	 * An icon that will be shown on the right side of the input. Only applies when dynamic is true or the border-design is active.
	 */
	icon?: string | object;

	/**
	 * The onClick-callback for the icon.
	 */
	onIconClick?: (e: any) => void;

	/**
	 * A function that will receive the reference to the wrapper element. This only has an effect if dynamic is true.
	 */
	wrapperRef?: (e: any) => void;

	/**
	 * When active the placeholder will not disappear on input but rather slide to the right of the input field to act more like a label. The option can also be Input.BOTTOM_DYNAMIC when the border-design is active.
	 */
	dynamic?: boolean | typeof Input.BOTTOM_DYNAMIC;

	/**
	 * Any additional props that will be forwarded to the <input>-element.
	 */
	customProps?: object;

	/**
	 * A HTML id that will be applied to the <input>-element.
	 */
	id?: string;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;

	/**
	 * Wether to mark an empty input as invalid.
	 */
	required?: boolean;

	/**
	 * Disables any user interaction with the input and renders it with a disabled style.
	 */
	disabled?: boolean;

	/**
	 * Wether to show a clear icon on the right side of the input when it is not empty.
	 */
	clearIcon?: boolean;

	/**
	 * The design of the input. Use either Input.DEFAULT_DESIGN or Input.BORDER_DESIGN.
	 */
	design?: typeof Input.DEFAULT_DESIGN | typeof Input.BORDER_DESIGN;

	/**
	 * An icon that will be shown on the left side of the input when the border-design is active.
	 */
	iconLeft?: string | object;

	/**
	 * A string or ReactNode that will be rendered on the left side of the input when the border-design is active.
	 */
	left?: ReactNode;

	/**
	 * A string or ReactNode that will be rendered on the right side of the input when the border-design is active.
	 */
	right?: ReactNode;

	/**
	 * An error message that will be shown instead of the placeholder when the border-design is active and the dynamic-prop is set to Input.BOTTOM_DYNAMIC.
	 */
	invalidMessage?: string;

	/**
	 * Default value if nothing is typed into the input. Only for border design and not compatible with placeholder.
	 */
	emptyValue?: string | number;

	/**
	 * Sets the autocomplete attribute
	 */
	autoComplete?: string;
}

export namespace Input {
	export const DEFAULT_DESIGN = 0;
	export const BORDER_DESIGN = 1;
	export const MOVING_DYNAMIC = true;
	export const NO_DYNAMIC = false;
	export const BOTTOM_DYNAMIC = 2;
}
