import React, { ReactNode } from "react";

/**
 * A text input that allows values to be grouped as tags.
 */
export class TagInput extends React.Component<TagInputProps> {}

export interface TagInputProps {
	/**
	 * An array of the current tags.
	 */
	tags?: { text: string | ReactNode }[];

	/**
	 * The text value of the tag input.
	 */
	value?: string;

	/**
	 * A callback that is invoked when the user adds a new tag (hits the enter-key).
	 */
	onAddTag?: (e: any) => any;

	/**
	 * A callback that is invoked when the user removes a tag.
	 */
	onRemoveTag?: (e: any) => any;

	/**
	 * A callback that is invoked when the user changes the text inside the tag input.
	 */
	onChange?: (e: any) => any;

	/**
	 * A placeholder that is shown when the tag input is empty (does neither container a tag or text).
	 */
	placeholder?: string;

	/**
	 * A classname string that will be applied to the outer-most wrapper of the input.
	 */
	className?: string;

	/**
	 * A React style object that will be applied to the outer-most wrapper of the input.
	 */
	style?: React.CSSProperties;

	/**
	 * Prevents removal of selected users and hides remove icon.
	 */
	disableRemove?: boolean;

	/**
	 * The design of the input. Use either TagInput.DEFAULT_DESIGN or TagInput.BORDER_DESIGN.
	 */
	design?: number;

	/**
	 * The maximum number of tags selected at once.
	 */
	max?: number;

	/**
	 * Adds a tag on blur
	 */
	addTagOnBlur?: boolean;

	/**
	 * A string or ReactNode that will be rendered on the left side of the tag input.
	 */
	left?: ReactNode;

	/**
	 * A callback for the keydown-event.
	 */
	onKeyDown?: (e: any) => any;
}
