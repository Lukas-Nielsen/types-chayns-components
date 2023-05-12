import React, { ReactNode } from "react";

/**
 * A chip-like component that is used to filter lists. Usually used in a group of 2 or more.
 */
export class FilterButton extends React.Component<FilterButtonProps> {}

export interface FilterButtonProps {
	/**
	 * A string or ReactNode that is shown inside of the filter button.
	 */
	label?: string | ReactNode;

	/**
	 * A number that is shown in bold on the right side of the button.
	 */
	count?: number;

	/**
	 * A function that will be called when the state of the button changes.
	 */
	onChange?: (e: any) => any;

	/**
	 * Wether the button is checked or not.
	 */
	checked?: boolean;

	/**
	 * Multiple filter buttons with the same name belong to one group. Only one of the buttons in a group can be active at one time.
	 */
	name?: string;

	/**
	 * The value that is provided as the first argument to the onChanged-callback when the name-property is set.
	 */
	value?: any;

	/**
	 * An icon that will be shown in the button. Use a FontAwesome icon like this: "fa fa-plane".
	 */
	icon?: string | { iconName: string; prefix: string };

	/**
	 * A classname string that will be set on the <label>-element. To change the color of the filter button give it a class that sets the CSS color-attribute, not background-color.
	 */
	className?: string;

	/**
	 * A React style object that will be applied to the <label>-element. To change the color of the filter button, add a color-style attribute to the button, not background-color.
	 */
	style?: React.CSSProperties;

	/**
	 * An HTML id that will be set on the (invisible) <input>-element. This is given as the second argument to onChange if name is unset.
	 */
	id?: string;

	/**
	 * Disables any interaction and renders the filter button as disabled.
	 */
	disabled?: boolean;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;

	/**
	 * Shrinks the filter button in size.
	 */
	small?: boolean;

	/**
	 * Changes the filter button shape to that of a button.
	 */
	rectangular?: boolean;
}
