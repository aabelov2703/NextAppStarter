"use client";
import { useAppContext } from "@/context/appContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navOptions } from "@/context/objects";
import BurgerSvg from "./ui/svg/burger";
import Switch from "./common/switch";

const NavOptions = ({ theme, setToggledNav, toggledNav }: any) => {
  return (
    <>
      {navOptions.map((option) => (
        <Link
          key={option.name}
          href={option.href}
          onClick={() => setToggledNav(false)}
          className={`${(!toggledNav && option?.class) || ""}`}
        >
          {option.name}
        </Link>
      ))}
      <div className="hidden sm:ml-auto sm:block">
        <Switch
          hint={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        />
      </div>
    </>
  );
};

const Nav: React.FC = () => {
  const { theme, setTheme } = useAppContext();
  const [toggledNav, setToggledNav] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setToggledNav(false);
  };

  return (
    <>
      <nav className="w-full h-10 hidden sm:flex sm:items-center sm:my-4 gap-2 px-4">
        <NavOptions
          toggleTheme={toggleTheme}
          theme={theme}
          toggledNav={toggledNav}
          setToggledNav={setToggledNav}
        />
      </nav>
      <nav className="w-full sm:hidden h-10 py-3 px-4 relative ">
        {toggledNav ? (
          <div
            className={`absolute left-0 top-5 flex flex-col justify-between gap-1 w-full highlighted ${theme}`}
          >
            <NavOptions
              toggleTheme={toggleTheme}
              theme={theme}
              toggledNav={toggledNav}
              setToggledNav={setToggledNav}
            />
          </div>
        ) : (
          <div onClick={() => setToggledNav((prev) => !prev)}>
            <BurgerSvg color={theme === "dark" ? "white" : "black"} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
