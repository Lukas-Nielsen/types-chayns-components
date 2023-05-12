import React from "react";

/**
 * A multiline text input that can automatically grow with its content.
 */
export class TextArea extends React.Component<TextAreaProps> {}

export interface TextAreaProps {
	/**
	 * A React style object that will be applied to the text area.
	 */
	style?: React.CSSProperties;

	/**
	 * Wether the component ignores any user interaction and is rendered with a disabled style.
	 */
	disabled?: boolean;

	/**
	 * A classname string that will be applied to the <textarea>-element.
	 */
	className?: string;

	/**
	 * A placeholder, that will be displayed if the text area is empty.
	 */
	placeholder?: string;

	/**
	 * Wether the text area is required for a form to complete. Renders the text area with an error style when its empty.
	 */
	required?: boolean;

	/**
	 * The design of the input. Use either TextArea.DEFAULT_DESIGN or TextArea.BORDER_DESIGN.
	 */
	design?: typeof TextArea.DEFAULT_DESIGN | typeof TextArea.BORDER_DESIGN;

	/**
	 * A callback that is invoked when the value of the <textarea> changes.
	 */
	onChange?: (e: string) => void;

	/**
	 * A callback that is invoked when the text area loses focus.
	 */
	onBlur?: (e: string) => void;

	/**
	 * The default value of the text area. Has no effect when the value prop is used.
	 */
	defaultValue?: string;

	/**
	 * The current text value of the area.
	 */
	value?: string;

	/**
	 * A callback that will be called when the keyup-event is fired from the <textarea>-element.
	 */
	onKeyUp?: (e: any) => void;

	/**
	 * A callback that will be called when the keydown-event is fired from the <textarea>-element.
	 */
	onKeyDown?: (e: any) => void;

	/**
	 * Wether the text area should automatically grow with its content.
	 */
	autogrow?: boolean;

	/**
	 * A function that will be invoked with a reference to the <textarea>-element or null.
	 */
	reference?: (e: any) => void;

	/**
	 * Wether click events should be stopped from propagating to parent elements.
	 */
	stopPropagation?: boolean;
}

export namespace TextArea {
	export const DEFAULT_DESIGN = 0;
	export const BORDER_DESIGN = 1;
}
