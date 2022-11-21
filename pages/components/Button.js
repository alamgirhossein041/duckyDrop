export default function Button({ children, color, ...props }) {
	const colorClassName = BUTTON_COLOR[color || "primary"];

	return (
		<button className={colorClassName} {...props}>
			{children}
		</button>
	);
}
