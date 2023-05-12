import React from "react";

export class VerificationIcon extends React.Component<VerificationIconProps> {}

export interface VerificationIconProps {
	/**
	 * The username
	 */
	name: string;

	/**
	 * The design of the icon. Use either VerificationIcon.DEFAULT_DESIGN, VerificationIcon.GRAY_DESIGN or VerificationIcon.BLUE_DESIGN.
	 */
	design?:
		| typeof VerificationIcon.DEFAULT_DESIGN
		| typeof VerificationIcon.GRAY_DESIGN
		| typeof VerificationIcon.BLUE_DESIGN;

	/**
	 * Whether the user is verified
	 */
	verified: boolean;
}

export namespace VerificationIcon {
	const DEFAULT_DESIGN = 0;
	const GRAY_DESIGN = 1;
	const BLUE_DESIGN = 2;
}
