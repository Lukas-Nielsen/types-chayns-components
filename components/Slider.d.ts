import React from "react";

/**
 * A horizontal track with a thumb that can be moved between a minimum and a maximum value.
 */
export class Slider extends React.Component<SliderProps> {}

export interface SliderProps {
	/**
	 * The minimum value of the slider.
	 */
	min?: number;

	/**
	 * The maximum value of the slider.
	 */
	max?: number;

	/**
	 * The amount of steps that the slider should be divided into.
	 */
	step?: number;

	/**
	 * Whether to show dots at the possible breakpoints
	 */
	showDots?: boolean;

	/**
	 * A default value for the slider.
	 */
	defaultValue?: number;

	/**
	 * The current value of the slider.
	 */
	value?: number;

	/**
	 * A React style object that will be applied to root element.
	 */
	style?: React.CSSProperties;

	/**
	 * A classname string that will be applied to the root element.
	 */
	className?: string;

	/**
	 * Wether the label should be shown. Only applies to horizontal sliders.
	 */
	showLabel?: boolean;

	/**
	 * A function to format the current value for display in the label.
	 */
	valueFormatter?: (e: any) => any;

	/**
	 * A React style object that will be applied to the label.
	 */
	labelStyle?: React.CSSProperties;

	/**
	 * A callback that is invoked when the user starts changing the value.
	 */
	onChangeStart?: (e: any) => any;

	/**
	 * A callback that is invoked when the user changes the value of the slider.
	 */
	onChange?: (e: any) => any;

	/**
	 * A callback that is invoked when the user stops changing the slider value.
	 */
	onChangeEnd?: (e: any) => any;

	/**
	 * A React style object that will be applied to the thumb.
	 */
	thumbStyle?: React.CSSProperties;

	/**
	 * Wether to ignore any user interaction and render the slider with a disabled style.
	 */
	disabled?: boolean;

	/**
	 * Wether the slider should be vertical instead of horizontal.
	 */
	vertical?: boolean;

	/**
	 * Wether the slider should select a range instead of a single value. This will add a second thumb for the user to adjust.
	 */
	interval?: boolean;

	/**
	 * The minimum range that can be selected by the two thumbs.
	 */
	minInterval?: number;

	/**
	 * The maximum range that can be selected by the two thumbs.
	 */
	maxInterval?: number;

	/**
	 * The default value for the left thumb.
	 */
	defaultStartValue?: number;

	/**
	 * The default value for the right thumb.
	 */
	defaultEndValue?: number;

	/**
	 * The current value of the left thumb.
	 */
	startValue?: number;

	/**
	 * The current value of the right thumb.
	 */
	endValue?: number;

	/**
	 * A React style object that will be applied to the track.
	 */
	trackStyle?: React.CSSProperties;

	/**
	 * A React style object that will be applied ot the inner track.
	 */
	innerTrackStyle?: React.CSSProperties;

	/**
	 * Wether the current value should be shown inside the thumb.
	 */
	showValueInThumb?: boolean;

	/**
	 * Wether the slider should be scaled when the user grabs it on mobile devices.
	 */
	scaleOnDown?: boolean;

	/**
	 * The width of the thumb.
	 */
	thumbWidth?: number;
}
