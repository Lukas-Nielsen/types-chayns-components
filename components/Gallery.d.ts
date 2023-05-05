export function Gallery({
	images,
	onClick,
	onDelete,
	deleteMode = false,
	height,
	width,
	className,
	style,
	stopPropagation = false,
	dragMode = false,
	onDragEnd,
	preventParams = false,
	smallTiles = false,
}: {
	images?: string[];
	onClick?: (e: any) => void;
	onDelete?: (e: string) => void;
	deleteMode?: boolean;
	height?: number | string;
	width?: number | string;
	className?: string;
	style?: React.CSSProperties;
	stopPropagation?: boolean;
	dragMode?: boolean;
	onDragEnd?: (e: any) => void;
	preventParams?: boolean;
	smallTiles?: boolean;
}): JSX.Element;
