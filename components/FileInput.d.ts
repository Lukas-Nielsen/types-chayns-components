import React, { ReactNode } from "react";

/**
 * Accepts specified file types via dialog or drag and drop.
 */
export class FileInput extends React.Component<FileInputProps> {}

export interface FileInputProps {
	/**
	 * A classname string that is applied to the root element.
	 */
	className?: string;

	/**
	 * A React style object that is applied to the root element.
	 */
	style?: React.CSSProperties;

	/**
	 * Wether to stop propagation of click events to parent elements.
	 */
	stopPropagation?: boolean;

	/**
	 * Disables any interaction with the component and renders it in a disabled style.
	 */
	disabled?: boolean;

	/**
	 * Custom error messages for the component.
	 */
	errorMessages?: FileInput.ErrorMessages;

	/**
	 * The different fields that will be shown in the file input.
	 */
	items?: FileInput.Item[];
}

export namespace FileInput {
	export interface ErrorMessages {
		tooMuchFiles: string;
		fileTooBig: string;
		wrongFileType: string;
		permanentNoPermission: string;
		temporaryNoPermission: string;
	}
	export interface Item {
		types: string[];
		maxFileSize: number;
		maxNumberOfFiles: number;
		directory: boolean;
		onClick: (e: any) => any;
		onChange: (e: any) => any;
		onError: (e: any) => any;
		className: string;
		style: React.CSSProperties;
		disabled: boolean;
		content:
			| { text: string; icon: string | object }
			| { children: ReactNode | ReactNode[] };
	}
}
