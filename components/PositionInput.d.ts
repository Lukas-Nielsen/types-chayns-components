import React, { ReactNode } from "react";

/**
 * A location input with a map and text input.
 *
 * This requires the Google Maps JavaScript API with the places library enabled. You can find more information about the Maps API here.
 *
 * https://developers.google.com/maps/documentation/javascript/overview
 */
export class PositionInput extends React.Component<PositionInputProps> {}

export interface PositionInputProps {
	/**
	 * The position that will be used as a starting point.
	 */
	defaultPosition: { lat: number; lng: number };

	/**
	 * This will be called when the position selection changes.
	 */
	onPositionChange?: (e: any) => any;

	/**
	 * An object with options for the Google Map. These options are documented here.
	 * 
	 * https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
	 */
	mapOptions?: object;

	/**
	 * A render function for creating a custom input overlay. It receives the currently selected position as its first argument and an onChange-method as its second argument.
	 */
	children?: (e: any) => any;

	/**
	 * A DOM element that the overlay should be rendered into.
	 */
	parent?: ReactNode;
}
