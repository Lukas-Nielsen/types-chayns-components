import React, { ReactNode } from "react";

export class ContextMenu extends React.Component<ContextMenuProps> {
	/**
	 * open the context menu
	 */
	show(): any;

	/**
	 * close the context menu
	 */
	hide(): any;
}

export interface ContextMenuProps {
	/**
	 * This callback will be called when the ContextMenu is shown and the user clicks away from it.
	 */
	onLayerClick?: (e: any) => void;

	/**
	 * This callback will be called when the context menu becomes visible
	 */
	onShow?: (e: any) => void;

	/**
	 * This callback will be called when the ContextMenu hides
	 */
	onHide?: (e: any) => void;

	/**
	 * The coordinates at which the context menu will get rendered.
	 */
	coordinates?: { x: number; y: number };

	/**
	 * The action items inside of the context menu. Their shape should look like this: { className: <string>, onClick: <function>, text: <string>, icon: <string> }, stringName: <string>.
	 */
	items?: {
		className: string;
		onClick: (e: any) => void;
		text: string | ReactNode;
		stringName: string;
		icon: string | Object | ReactNode;
	}[];

	/**
	 * This specifies where the menu will appear relative to the components provided in the children-prop. Possible values are: 0 for top left, 1 for bottom left, 2 for bottom right, 3 for top right, 4 for top center and 5 for bottom center.
	 */
	position?: 0 | 1 | 2 | 3 | 4 | 5;

	/**
	 * The position of the arrow relative to the children. Possible values are 0 for left, 1 for center and 2 for right.
	 */
	positionOnChildren?: 0 | 1 | 2;

	/**
	 * Specifies the DOM node the context menu will be rendered into.
	 */
	parent?: any;

	/**
	 * The React node that the context menu refers to.
	 */
	children?: ReactNode;

	/**
	 * Called when the onclick-event is triggered on the children.
	 */
	onChildrenClick?: (e: any) => void;

	/**
	 * A React style object that will be applied to the children wrapper.
	 */
	childrenStyle?: React.CSSProperties;

	/**
	 * A classname string that will be applied to the children wrapper.
	 */
	childrenClassName?: string;

	/**
	 * Wether to stop propagation of click events on the children elements.
	 */
	stopPropagation?: boolean;

	/**
	 * The minimum width of the context menu.
	 */
	minWidth?: number;

	/**
	 * The maximum width of the context menu.
	 */
	maxWidth?: number;

	/**
	 * Adds a white background to the children wrapper, for when it would otherwise be difficult to view (e.g. on images or video).
	 */
	showTriggerBackground?: boolean;

	/**
	 * A classname string applied to the Bubble component.
	 */
	className?: string;

	/**
	 * A React style object that is applied to the Bubble component.
	 */
	style?: React.CSSProperties;

	/**
	 * Removes the parent padding to the page borders from the context menu position. This is needed when the parent is padded and relatively positioned.
	 */
	removeParentSpace?: boolean;

	/**
	 * Disables the use of a dialog on mobile.
	 */
	disableDialog?: boolean;

	/**
	 * Adjust the distance of the arrow and the end of the children. This only applies if positionOnChildren is set to left (0) or right (2).
	 */
	arrowDistance?: number;
}
