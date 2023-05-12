import React, { ReactNode } from "react";

/**
 * An accordion that has a big image and appears in a grid. Should be used inside of an ImageAccordionGroup.
 */
export class ImageAccordion extends React.Component<ImageAccordionProps> {}

export interface ImageAccordionProps {
	prevOpen: boolean;
	children: ReactNode;
	disabled: boolean;
	open: boolean;
}
