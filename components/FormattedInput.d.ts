import React from "react";

/**
 * A text input that automatically formats its input with a formatter. Since this component is based on the Input-component, it takes any of the Input-components props, which are not listed here.
 *
 * This component only works as an uncontrolled component, meaning that it does not take a value-prop.
 */
export class FormattedInput extends React.Component<FormattedInputProps> {}

export interface FormattedInputProps {
	/**
	 * An instance of a formatter that will be used to format the value of the input.
	 */
	initialFormatter: FormattedInput.Formatter;

	/**
	 * The function that will be called on change.
	 */
	onChange?: (e: any) => any;

	/**
	 * The initial value of the input.
	 */
	defaultValue?: any;
}

export namespace FormattedInput {
	export class Formatter {
		format(value: any): any;

		parse(value: any): any;

		validate(): {
			valid: false;
		};
	}

	export class IntegerFormatter extends Formatter {}
	export class DecimalFormatter extends Formatter {}
	export class PriceFormatter extends DecimalFormatter {}

	export const FORMAT_INTEGER: IntegerFormatter;
	export const FORMAT_DECIMAL: DecimalFormatter;
	export const FORMAT_PRICE: PriceFormatter;
}
