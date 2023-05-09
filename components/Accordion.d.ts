import React, { ReactNode } from "react";

export class Accordion extends React.Component<AccordionPorps> {}

export interface AccordionPorps {
	/**
	 * The component that should be displayed in the accordion head when it is closed. Can be a string, React node or object like this: { open: OpenComponent, close: CloseComponent }. If an object is provided, the components will be swapped based on the opening state.
	 */
	head: ReactNode | { open: ReactNode; close: ReactNode };

	/**
	 * Allows text to wrap inside of the head.
	 */
	headMultiline?: boolean;

	/**
	 * Additional classnames to be applied to the head. Can be specified as a string, string[] or {[key: string]: boolean}, which will be passed to the classnames function.
	 */
	headClassNames?: string | Array<string> | object;

	/**
	 * Custom HTML attributes that will be added to the <div> that contains the head component.
	 */
	headCustomAttributes?: object;

	/**
	 * The content the Accordion reveals when it is open. To get proper spacing inside of the Accordion body, supply a <div> with the classname accordion__content applied to it.
	 */
	children: ReactNode;

	/**
	 * Component that will be shown on the right side of the component. Typically a badge. If you want different components for the open and closed state, supply an object: { open: ..., closed: ... }.
	 */
	right?: ReactNode | { open: ReactNode; close: ReactNode };

	/**
	 * Render the Accordion content, even if it is closed.
	 */
	renderClosed?: boolean;

	/**
	 * Enables the wrapped Accordion style. Use this if the Accordion is nested inside of another Accordion.
	 */
	isWrapped?: boolean;

	/**
	 * A string identifier for a group of Accordions. Only one Accordion of a group that have the same dataGroup-prop can be open.
	 */
	dataGroup?: string;

	/**
	 * A classname that will be applied to the outer most <div>-wrapper of the Accordion.
	 */
	className?: string;

	/**
	 * An HTML id that will be applied to the outer most <div>-wrapper.
	 */
	id?: string;

	/**
	 * A React style object that will be applied to the outer most <div>-wrapper of the Accordion.
	 */
	style?: React.CSSProperties;

	/**
	 * A React style object that will be applied to the body of the Accordion.
	 */
	styleBody?: React.CSSProperties;

	/**
	 * A callback that is called when the Accordion gets opened.
	 */
	onOpen?: (e: any) => void;

	/**
	 * A callback that is called when the Accordion gets closed.
	 */
	onClose?: (e: any) => void;

	/**
	 * Wether the Accordion should be opened by default (when it first gets rendered).
	 */
	defaultOpened?: boolean;

	/**
	 * A function that receives the ref of the outer most <div>-element of the Accordion.
	 */
	reference?: any;

	/**
	 * Wether the Accordion should adjust its height in the opened state.
	 */
	autogrow?: boolean;

	/**
	 * Control the open state.
	 */
	open?: boolean;

	/**
	 * The icon that is displayed to the left of the Accordion head. Supply a FontAwesome string like "fa fa-plane" or a React component.
	 */
	icon?: object | string | ReactNode;

	/**
	 * Disable the icon rotation.
	 */
	noRotate?: boolean;

	/**
	 * Disable the opening and closing logic. The Accordion will be stuck in one state.
	 */
	fixed?: boolean;

	/**
	 * Remove the Accordion to the left of the head.
	 */
	noIcon?: boolean;

	/**
	 * A callback that will be called when the text in the search field on the right changes. This will also enable the search field.
	 */
	onSearch?: (e: any) => void;

	/**
	 * A callback that will be called when the enter-key is pressed in the search field.
	 */
	onSearchEnter?: (e: any) => void;

	/**
	 * The placeholder for the search field.
	 */
	searchPlaceholder?: string;

	/**
	 * The value for the search field (for making a controlled input).
	 */
	searchValue?: string;

	/**
	 * Remove content from the Accordion body when it is closing.
	 */
	removeContentClosed?: boolean;

	/**
	 * Add a click listener for the Accordion head.
	 */
	onClick?: (e: any) => void;

	/**
	 * Disables the Accordion, which changes the style and removes any interactions.
	 */
	disabled?: boolean;

	/**
	 * When set, the open-prop updates and onChange does not update the internal state.
	 */
	controlled?: boolean;
}
