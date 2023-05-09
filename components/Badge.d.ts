import React, { ReactNode } from "react";

export class Badge extends React.Component<BadgeProps> {}

export interface BadgeProps {
	/**
	 * A React node that is displayed inside of the Badge.
	 */
	children: ReactNode;

	/**
	 * A classname that is applied to the Badge <div>-element.
	 */
	className?: string;

	/**
	 * A React style object that will be applied to the Badge <div>-element.
	 */
	style?: React.CSSProperties;

	/**
	 * Retrieves the ref to the Badge <div>-element.
	 */
	badgeRef?: (e: any) => void;
}
