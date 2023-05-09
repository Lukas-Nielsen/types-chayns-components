import React from "react";

export class Icon extends React.Component<IconProps> {}

export interface IconProps {
	/**
	 * The icon to display. Supply a string or an array of strings like this: fa fa-plane. Search for icons and their strings on https://fontawesome.com/icons/. For backwards compatibility you can also specify an icon object from the @fortawesome-packages, but this should not be used going forward.
	 */
	icon: string | { iconName: string; prefix: string } | string[];

	/**
	 * A classname string that will be applied to the HTML element of the icon.
	 */
	className?: string;

	/**
	 * A React style object that will be applied ot the <i>-element of the icon.
	 */
	style?: React.CSSProperties;

	/**
	 * A callback that is called for the onclick-event on the icon.
	 */
	onClick?: (e: any) => void;

	/**
	 * Disables any user interaction on the icon and renders it in a disabled style.
	 */
	disabled?: boolean;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;
}
