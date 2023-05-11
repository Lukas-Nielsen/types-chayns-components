import React, { ReactNode } from "react";

/**
 * Adjusts the color scheme for all child components.
 */
export class ColorScheme extends React.Component<ColorSchemeProps> {}

export interface ColorSchemeProps {
	/**
	 * The color to use for child components in hex format.
	 */
	color?: string;

	/**
	 * A secondary color to use for child components in hex format.
	 */
	secondaryColor?: string;

	/**
	 * A color mode to use for child components.
	 */
	colorMode?: string | number;

	/**
	 * Children of the component.
	 */
	children: ReactNode;

	/**
	 * Styles to be set on the wrapper <div>-element.
	 */
	style?: { [key: string]: string | number };

	/**
	 * An object of CSS variables that should be set on the <div>-wrapper. Should look like this: { "--my-css-var": 100 }.
	 */
	cssVariables?: { [key: string]: string | number };
}
