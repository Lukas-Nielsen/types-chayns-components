import React, { ReactNode } from "react";

/**
 * Loads text strings from our database and displays them. Handles replacements and changing the string via CTRL + Click (only internal).
 */
export class TextString extends React.Component<TextStringProps> {}

export interface TextStringProps {
	/**
	 * The string id of the text you want to display.
	 */
	stringName?: string;

	/**
	 * An map of replacements in the form of an object with the string that should be replaced as its key and the replacement as its value.
	 */
	replacements?: { [key: string]: string | number };

	/**
	 * The child node the text should be rendered into.
	 */
	children?: ReactNode;

	/**
	 * Wether the component should render HTML content in the string.
	 */
	useDangerouslySetInnerHTML?: boolean;

	/**
	 * The language of the string, provided as a ISO 639-1 code. Please note that the language has to be loaded beforehand for this to work.
	 */
	language?: string;

	/**
	 * A fallback string that will be displayed if the main string failed to load.
	 */
	fallback?: string;

	/**
	 * The string names of the children props, e.g. placeholder or accordion head.
	 */
	setProps?: { [key: string]: object | string | number };

	/**
	 * Prevents setting the no-translate class to the children when the language of the text string matches the current language of the user.
	 */
	preventNoTranslate?: boolean;
}
