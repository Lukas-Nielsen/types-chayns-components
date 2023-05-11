import React, { MouseEventHandler, ReactNode } from "react";

/**
 * Buttons initiate actions, can include a title or an icon and come with a set of predefined styles.
 */
export class Button extends React.Component<ButtonProps> {}

export interface ButtonProps {
	/**
	 * String or components that are rendered inside of the button.
	 */
	children: ReactNode;

	/**
	 * Renders the button on the "ChooseButton"-style. Alternatively use the ChooseButton-component.
	 */
	chooseButton?: boolean;

	/**
	 * Renders the button as disabled and disables click events.
	 */
	disabled?: boolean;

	/**
	 * Will be called after the button has been clicked with the event as the first parameter.
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>;

	/**
	 * String of classnames that should be added to the button.
	 */
	className?: string;

	/**
	 * An optional icon that is displayed on the left of the button. Supply a FontAwesome icon like this: "fa fa-plane"
	 */
	icon?: string | ReactNode;

	/**
	 * Render the button in a secondary style.
	 */
	secondary?: boolean;

	/**
	 * Stop the event propagation on click.
	 */
	stopPropagation?: boolean;

	/**
	 * Set the type for the native button HTML element.
	 */
	type?: "button" | "submit" | "reset";
}
