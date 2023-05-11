import React, { ReactNode } from "react";

/**
 * Formats a date or date range to be easily readable and reveals the absolute date on hover.
 */
export class DateInfo extends React.Component<DateInfoProps> {}

export interface DateInfoProps {
	/**
	 * The node the text is written into.
	 */
	children?: ReactNode;

	/**
	 * The language of the text as an ISO 3166-1 alpha-2 string.
	 */
	language?: string;

	/**
	 * The date that should be formatted. If a date range is supplied, this should be the earier date. You can supply a date as the number of milliseconds since 1970, ISO-8601 string or via a JavaScript Date-object,
	 */
	date: string | number | Date;

	/**
	 * The later date for a date range.
	 */
	date2?: string | number | Date;

	/**
	 * Wether the formatted text should show the time.
	 */
	showTime?: boolean;

	/**
	 * Wether the formatted text should show the date.
	 */
	showDate?: boolean;

	/**
	 * Wether the day of the week should be written out.
	 */
	writeDay?: boolean;

	/**
	 * Determines how to write the month. If true, the whole name will be written out ("december"), if false only the number will be displayed ("12."), otherwise it will show the short form of the month ("dec.").
	 */
	writeMonth?: boolean;

	/**
	 * Set this to true if the title-attribute should not be added to the children.
	 */
	noTitle?: boolean;

	/**
	 * Wether the component should say "today" if the date matches today.
	 */
	useToday?: boolean;

	/**
	 * Wether the component should use "tomorrow" and "yesterday".
	 */
	useTomorrowYesterday?: boolean;

	/**
	 * When true the year will be omitted from the output, if null the year will be shortened ("20" for 2020). When this is false, the full year will be shown.
	 */
	hideYear?: boolean | null;
}
