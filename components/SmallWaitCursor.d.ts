import React from "react";

/**
 * A small circular loading indicator.
 */
export class SmallWaitCursor extends React.Component<SmallWaitCursorProps> {}

export interface SmallWaitCursorProps {
	/**
	 * Wether the wait cursor should be shown.
	 */
	show?: boolean;

	/**
	 * A React style object that will be applied to the wrapper.
	 */
	style?: React.CSSProperties;

	/**
	 * Wether a background should be shown behind the spinner.
	 */
	showBackground?: boolean;

	/**
	 * Wether the spinner should be rendered with display: inline-block;. This does not work when showBackground is true
	 */
	inline?: boolean;

	/**
	 * A classname sring that will be applied to the container element of the spinner.
	 */
	className?: string;
}
