import { useThemeContext } from "@/context/theme-context";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const itemClass = `py-1 px-2 h-7 rounded-sm hover:shadow hover:opacity-100 hover:text-warning`;

const Theme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className={`min-w-9 ${itemClass}`} onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default Theme;
