import React from "react";

/**
 * An input for opening times.
 */
export class OpeningTimes extends React.Component<OpeningTimesProps> {}

export interface OpeningTimesProps {
	/**
	 * An array of the timespans that are opening hours.
	 */
	times: OpeningTimes.Time[];
	
	/**
	 * Called after the user has changed the opening times. Receives the modified times as its first parameter.
	 */
	onChange?: (e: any) => any;
	
	/**
	 * A classname string that will be applied to the root container.
	 */
	className?: string;
	
	/**
	 * A React style object that will be applied to the root container.
	 */
	style?: React.CSSProperties;
	
	/**
	 * Wether to force a mobile view.
	 */
	forceMobile?: boolean;
	
	/**
	 * The hint position. Possible values are OpeningTimes.hintPositions.NONE, OpeningTimes.hintPositions.TOP and OpeningTimes.hintPositions.BOTTOM.
	 */
	hintPosition?: OpeningTimes.hintPosition;
	
	/**
	 * The text to be shown inside of the hint.
	 */
	hintText?: string;
}

export namespace OpeningTimes {
	export interface Time {
		/**
		 * the weekday
		 */
		weekDay: number;

		/**
		 * the start time
		 */
		start: string;

		/**
		 * the end time
		 */
		end: string;

		/**
		 * disbaled or not
		 */
		disabled: boolean;
	}

	export enum hintPosition {
		NONE = 0,
		TOP = 1,
		BOTTOM = 2,
	}
}
