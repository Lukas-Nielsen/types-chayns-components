import React from "react";

/**
 * A text input that allows emojis to be put in.
 */
export class EmojiInput extends React.Component<EmojiInputProps> {}

export interface EmojiInputProps {
	/**
	 * Text that will be shown as a placeholder when the input is empty.
	 */
	placeholder: string;

	/**
	 * This is called when the text changes. There is an additional key on the event.target property called pureInnerText which contains the full text without any of the emoji elements. This is the text you should store in your local state and pass to this input as the value-prop.
	 */
	onInput: (e: any) => any;

	/**
	 * The value of the input.
	 */
	value: string;

	/**
	 * The HTML id to give to the input element.
	 */
	id: string;

	/**
	 * Hides the bottom border of the input.
	 */
	hideBorder?: boolean;

	/**
	 * This will be called on the keydown-event of the input element.
	 */
	onKeyDown?: (e: any) => any;

	/**
	 * Disables any interaction with the input and changes to a disabled style.
	 */
	disabled?: boolean;

	/**
	 * A React style object that will be passed to the input element.
	 */
	style?: React.CSSProperties;

	/**
	 * This function will be called when the input element receives focus.
	 */
	onFocus?: (e: any) => any;

	/**
	 * This function will be called when the input element loses focus.
	 */
	onBlur?: (e: any) => any;
}
