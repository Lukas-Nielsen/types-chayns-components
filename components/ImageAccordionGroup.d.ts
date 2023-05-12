import React from "react";
import { ImageAccordion } from "./ImageAccordion";

/**
 * Groups several ImageAccordion components together, so only one of them can be open at a time.
 */
export class ImageAccordionGroup extends React.Component<ImageAccordionGroupProps> {}

export interface ImageAccordionGroupProps {
	/**
	 * A list of ImageAccordion components, that are contained in this group.
	 */
	children?: ImageAccordion[];

	/**
	 * An id that identifies this group. Accordions in groups that share the same dataGroup close each other.
	 */
	dataGroup?: string;

	/**
	 * A classname string that will be applied to the container element.
	 */
	className?: string;

	/**
	 * A function that receives a reference to the root containers DOM node.
	 */
	reference?: (e: any) => any;

	/**
	 * A callback that is invoked when one of the ImageAccordion components in this group opens.
	 */
	onHeadOpen?: (e: any) => any;
}
