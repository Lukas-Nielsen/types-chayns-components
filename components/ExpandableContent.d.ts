import React, { ReactNode } from "react";

/**
 * A collapsible section that reveals its children with a height transition.
 */
export class ExpandableContent extends React.Component<ExpandableContentProps> {}

export interface ExpandableContentProps {
	/**
	 * An object of classname strings that should be applied in the different states.
	 */
	classNames?: ExpandableContent.ClassNames;
	
	/**
	 * This controls the animation timeouts for opening and closing.
	 */
	timeout?: { opening: number; closing: number };
	
	/**
	 * Wether the content should be visible. If changed, a height transition will start.
	 */
	open: boolean;
	
	/**
	 * A React style object that is passed to the wrapper <div>-element.
	 */
	style?: React.CSSProperties;
	
	/**
	 * A classname string that is applied to the wrapper element.
	 */
	className?: string;
	
	/**
	 * The children of the component.
	 */
	children: ReactNode | ReactNode[];
	
	/**
	 * Wether the content should be removed when the component is closed and the content would not be visible anyways.
	 */
	removeContentClosed?: boolean;
}

export namespace ExpandableContent {
	export interface ClassNames {
		opening: string;
		opened: string;
		closing: string;
		closed: string;
	}
}
