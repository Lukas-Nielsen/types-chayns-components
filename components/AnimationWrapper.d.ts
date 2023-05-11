import React, { ReactNode } from "react";

/**
 * The AnimationWrapper provides an eye-catching initial animation to its children.
 */
export class AnimationWrapper extends React.Component<AnimationWrapperProps> {}

export interface AnimationWrapperProps {
	/**
	 * The children that should be animated.
	 */
	children?: ReactNode;

	/**
	 * The duration of the animation in seconds.
	 */
	animationTime?: number;

	/**
	 * The time until the height of the content is set to auto to reflect changes in children size.
	 */
	setAutoTime?: number;
}
