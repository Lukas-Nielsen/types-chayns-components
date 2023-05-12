import React, { ReactNode } from "react";

/**
 * Wraps a child component and displays a message when the child is hovered or clicked on. Allows to be shown imperatively by calling .show() or .hide() on its reference.
 */
export class Tooltip extends React.Component<TooltipProps> {
	/**
	 * show the tooltip
	 */
	show(): any;

	/**
	 * hide the tooltip
	 */
	hide(): any;
}

export interface TooltipProps {
	/**
	 * The content of the tooltip. Either specify an object with the accepted properties or render custom elements by passing an object like so: { html: <div /> }.
	 */
	content: Tooltip.ContentProps | { html: ReactNode };

	/**
	 * The ReactNode the tooltip should refer to. If the children node is a <span> or <p> element, it will be decorated with a dotted underline.
	 */
	children?: ReactNode;

	/**
	 * Wether mouseover and mouseleave listeners should be added to the children elements, which makes the tooltip automatically appear on hover.
	 */
	bindListeners?: boolean;

	/**
	 * The position of the tooltip. 0 is top left, 1 is bottom left, 2 is bottom right and 3 is top right.
	 */
	position?: number;

	/**
	 * The minimum width of the tooltip.
	 */
	minWidth?: number;

	/**
	 * The maximum width of the tooltip.
	 */
	maxWidth?: number;

	/**
	 * Wether the close icon in the top right corner of the tooltip should be shown.
	 */
	removeIcon?: boolean;

	/**
	 * A DOM node the tooltip should be rendered into.
	 */
	parent?: any;

	/**
	 * An object with coordinates at which the tooltip should point.
	 */
	coordinates?: { x: number; y: number };

	/**
	 * A React style object that is applied to the children.
	 */
	childrenStyle?: React.CSSProperties;

	/**
	 * A classname string that should be applied to the children.
	 */
	childrenClassNames?: string;

	/**
	 * Prevent adding an underline to the children.
	 */
	preventTriggerStyle?: boolean;

	/**
	 * Hide the tooltip when the cursor leaves the children, even if the cursor is over the bubble.
	 */
	hideOnChildrenLeave?: boolean;

	/**
	 * Removes any padding of the page from the tooltip position. This is only needed when the parent is padded to the page and is relatively positioned.
	 */
	removeParentSpace?: boolean;

	/**
	 * Wether the target device is iOS (only relevant during serverside rendering).
	 */
	isIOS?: boolean;

	/**
	 * Whether to stop propagation for click on close icon
	 */
	stopPropagation?: boolean;
}

export namespace Tooltip {
	export interface ContentProps {
		/**
		 * tooltop content
		 */
		text: string;

		/**
		 * tooltip headline
		 */
		headline?: string;

		/**
		 * image to show
		 */
		imageUrl?: string;

		/**
		 * text for button
		 */
		buttonText?: string;

		/**
		 * on click handler for the button
		 */
		buttonOnClick?: (e: any) => any;
	}
}
