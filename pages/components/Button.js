export default function Button({ children, color, ...props }) {
  const BUTTON_COLOR = {
    primary: "primary",
    light: "light",
    dark: "dark",
  };

  const colorClassName = BUTTON_COLOR[color || "primary"];

  return (
    <button className={colorClassName} {...props}>
      {children}
    </button>
  );
}
