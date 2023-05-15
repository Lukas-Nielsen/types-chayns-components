import React, { ReactNode } from "react";

/**
 * An animated progress bar that can show an actions progress or an indeterminate state like a loading spinner.
 */
export class ProgressBar extends React.Component<ProgressBarProps> {}

export interface ProgressBarProps {
	/**
	 * The progress in percent (0 - 100).
	 */
	value?: number;

	/**
	 * A label that is shown beneath the progress bar.
	 */
	children?: ReactNode;

	/**
	 * When toggled on it will hide the progress bar in an animated transition and only show its children.
	 */
	ready?: boolean;
}
