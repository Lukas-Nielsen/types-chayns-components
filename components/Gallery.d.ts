import React from "react";

/**
 * An image gallery that displays up to four images by default. Also supports reordering and deletion of images and blurred image previews for images loaded from tsimg.cloud.
 */
export class Gallery extends React.Component<GalleryProps> {}

export interface GalleryProps {
	/**
	 * An array of strings or File objects that will be the image sources.
	 */
	images?: string[];

	/**
	 * A function that is called when an Image is clicked.
	 */
	onClick?: (e: any) => void;

	/**
	 * A function that is called when an image is deleted in deletion mode.
	 */
	onDelete?: (e: string) => void;

	/**
	 * Wether the deletion mode is active.
	 */
	deleteMode?: boolean;

	/**
	 * The height of the gallery as a number of pixels or CSS string.
	 */
	height?: number | string;

	/**
	 * The width of the gallery as a number of pixels or CSS string.
	 */
	width?: number | string;

	/**
	 * A classname string that will be applied to the root container.
	 */
	className?: string;

	/**
	 * A React style object that is applied to the root container.
	 */
	style?: React.CSSProperties;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;

	/**
	 * Wether drag mode is active.
	 */
	dragMode?: boolean;

	/**
	 * Called after the user finished reordering the array. Receives the new array as its first parameter.
	 */
	onDragEnd?: (e: any) => void;

	/**
	 * This will be forwarded to the Image-component. It prevents parameters of the loaded image. E.g. supply { width: true } to prevent the width-parameter on the loaded image.
	 */
	preventParams?: boolean;

	/**
	 * This option changes the layout to the layout known from delete- and drag-mode without activating this modes.
	 */
	smallTiles?: boolean;
}
