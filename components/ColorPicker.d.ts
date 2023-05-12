import React, { ReactNode } from "react";
import { Bubble } from "./Bubble";

/**
 * Lets a user choose a color for text, shapes, marking tools, and other elements.
 */
export class ColorPicker extends React.Component<ColorPickerProps> {}

export interface ColorPickerProps {
	/**
	 * Display the color picker without a bubble.
	 */
	inline?: boolean;

	/**
	 * The current color. Either a HEX-string, an HSV(A)- or RGB(A)-object.
	 */
	color?: any;

	/**
	 * The bubble position. The possible values are listed under the Bubble-component.
	 */
	bubblePosition?: Bubble.Position;

	/**
	 * Will be called when changing the color.
	 */
	onChange?: (e: any) => any;

	/**
	 * Will be called after the color was changed.
	 */
	onChangeEnd?: (e: any) => any;

	/**
	 * Will be called when the picker loses focus.
	 */
	onBlur?: (e: any) => any;

	/**
	 * Wether the picker should show a transparency slider.
	 */
	transparency?: boolean;

	/**
	 * The parent node the bubble should be rendered into.
	 */
	parent?: any;

	/**
	 * The classname that will be set on the children wrapper.
	 */
	className?: string;

	/**
	 * A React style object that will be assigned to the children wrapper element.
	 */
	style?: { [key: string]: number | string };

	/**
	 * A classname string that will be applied to the Bubble component.
	 */
	bubbleClassName?: string;

	/**
	 * A React style object that will be applied to the Bubble component.
	 */
	bubbleStyle?: { [key: string]: number | string };

	/**
	 * Displays an input to type in the color.
	 */
	input?: boolean;

	/**
	 * The color model that is used by default.
	 */
	defaultColorModel?: number;

	/**
	 * Children // TODO
	 */
	children?: ReactNode;

	/**
	 * Removes space from the parent to the page borders from the tooltip position. This is only needed if the parent is padded from the page and has a relative positioning.
	 */
	removeParentSpace?: boolean;

	/**
	 * Shows all color models
	 */
	showAllColorModels?: boolean;

	/**
	 * An array of custom selectable colors
	 */
	customColorsArray?: any[];

	/**
	 * Shows custom colors
	 */
	showCustomColors?: boolean;

	/**
	 * Shows global colors
	 */
	showGlobalColors?: boolean;

	/**
	 * Will be called when a custom color is added
	 */
	onCreateCustomColor?: (e: any) => any;

	/**
	 * Will be called when a custom color is removed
	 */
	onRemoveCustomColor?: (e: any) => any;
}
