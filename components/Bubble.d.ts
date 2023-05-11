import React, { ReactNode } from "react";

/**
 * A floating bubble that is primarily used to power the ContextMenu and Tooltip components.
 */
export class Bubble extends React.Component<BubbleProps> {}

export interface BubbleProps {
	/**
	 * The children that will be rendered inside of the bubble.
	 */
	children?: ReactNode;

	/**
	 * A classname string that will be set on the children wrapper element.
	 */
	className?: string;

	/**
	 * A React style object that will be applied to the children wrapper element.
	 */
	style?: React.CSSProperties;

	/**
	 * This specifies where the bubble will appear relative to its coordinates. Possible values are: 0 for top left, 1 for bottom left, 2 for bottom right, 3 for top right, 4 for top center and 5 for bottom center.
	 */
	position?: 0 | 1 | 2 | 3 | 4 | 5;

	/**
	 * A DOM element into which the Bubble-component will render.
	 */
	parent?: any;

	/**
	 * The coordinates where the Bubble will point to. Is provided in an object format that should look like this: { x: <number>, y: <number> }
	 */
	coordinates?: { x: number; y: number };

	/**
	 * A callback that will be called when the mouse enters the Bubble.
	 */
	onMouseEnter?: (e: any) => any;

	/**
	 * A callback that will be called when the mouse leaves the Bubble.
	 */
	onMouseLeave?: (e: any) => any;

	/**
	 * A React style object that will be supplied to the outer most element of the Bubble.
	 */
	topDivStyle?: React.CSSProperties;
}
