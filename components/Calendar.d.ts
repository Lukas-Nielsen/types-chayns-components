import React from "react";

/**
 * An interactive grid calendar that can highlight specified dates.
 */
export class Calendar extends React.Component<CalendarProps> {}

export interface CalendarProps {
	/**
	 * Defines the first month that will be displayed.
	 */
	startDate?: Date;

	/**
	 * Defines the last month that will be displayed.
	 */
	endDate?: Date;

	/**
	 * This callback is called when the user clicks on a date in the calendar.
	 */
	onDateSelect?: (e: any) => any;

	/**
	 * The currently selected date as a JavaScript Date element.
	 */
	selected?: Date;

	/**
	 * This array defines the active dates. Has no effect when activeAll is true.
	 */
	activated?: Date[];

	/**
	 * This prop is used to highlight dates. It takes object in the form of { dates: [...<date objects>], color: '<css color>' }, either supplied directly or in an array.
	 */
	highlighted?:
		| { dates: Date[]; color: string }
		| { dates: Date[]; color: string }[];

	/**
	 * Circle color of selected day
	 */
	circleColor?: string;

	/**
	 * Activate all dates.
	 */
	activateAll?: boolean;

	/**
	 * A React style object that is applied to the root <div>-element.
	 */
	style?: React.CSSProperties;

	/**
	 * A classname that is applied to the root <div>-element.
	 */
	className?: string;
}
