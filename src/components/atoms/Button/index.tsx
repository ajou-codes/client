import { useMemo } from "react";
import { CgSpinner } from "react-icons/cg";
import "./index.css";
interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "primary" | "white" | "danger";
  size?: "base" | "lg";
  loading?: boolean;
}

function Button({
  children,
  className,
  loading,
  type = "primary",
  size = "base",
  ...rest
}: ButtonProps) {
  const theme = useMemo(() => {
    switch (type) {
      case "primary":
        return " bg-indigo-600 hover:bg-indigo-700  focus:ring-indigo-500";
      case "danger":
        return " bg-red-500 hover:bg-red-700  focus:ring-red-500";
      case "white":
        return " bg-white hover:opacity-50 text-black";
    }
  }, [type]);

  const themSizes = useMemo(() => {
    switch (size) {
      case "base":
        return "";
      case "lg":
        return "text-lg py-5 px-10";
    }
  }, [type]);
  return (
    <button
      {...rest}
      disabled={loading}
      className={[
        "inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
        theme,
        loading && "opacity-50",
        themSizes,
        className,
      ].join(" ")}
    >
      {loading && <CgSpinner className="mr-2 animate-spin" />} {children}
    </button>
  );
}

export default Button;