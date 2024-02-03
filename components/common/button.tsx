import { useAppContext } from "@/context/appContext";

const Button = ({ children, onClick, ...props }: any) => {
  const { theme } = useAppContext();
  const { color, variant = "outlined", size = "", className = "" } = props;

  /* TODO: code colors in tailwind.config */
  const colors = {
    bgColor:
      color === "success"
        ? theme === "dark"
          ? "green-200"
          : "green-800"
        : color === "error"
        ? theme === "dark"
          ? "red-800"
          : "red-200"
        : color === "warning"
        ? theme === "dark"
          ? "orange-800"
          : "orange-200"
        : theme === "dark"
        ? "gray-800"
        : "gray-200",
    color:
      color === "success"
        ? theme === "dark"
          ? "green-700"
          : "green-300"
        : color === "error"
        ? theme === "dark"
          ? "red-100"
          : "red-800"
        : color === "warning"
        ? theme === "dark"
          ? "orange-100"
          : "orange-800"
        : theme === "dark"
        ? "gray-100"
        : "gray-800",
  };

  const borderColor =
    variant === "outlined"
      ? `border border-solid border-1 border-radius-4 ${
          "border-" + colors.color
        }`
      : "";
  const bgColor = `bg-${colors.bgColor}`;
  const textColor = `text-${colors.color}`;

  const preSet =
    borderColor +
    " " +
    bgColor +
    " " +
    textColor +
    " " +
    (size === "small"
      ? "text-sm p-1"
      : size === "large"
      ? "px-6 py-2 text-xl"
      : "px-4 py-1 ");

  return (
    <button
      type="button"
      onClick={onClick}
      className={`m-1 rounded-full ${preSet} ${className}`}
      style={props?.style || {}}
    >
      {children}
    </button>
  );
};

export default Button;
