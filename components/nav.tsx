"use client";
import { useAppContext } from "@/context/appContext";
import Link from "next/link";
import { useEffect } from "react";
import { navOptions } from "@/context/objects";
import CogBtn from "./ui/buton/cog-btn";
import BurgerBtn from "./ui/buton/burger-btn";

const NavOptions = () => {
  return (
    <>
      {navOptions.map((option) => (
        <Link key={option.name} href={option.href} className={option.class}>
          {option.name}
        </Link>
      ))}
      <div className="hidden sm:ml-auto sm:flex ml-4">
        <CogBtn />
      </div>
    </>
  );
};

const Nav: React.FC = () => {
  const { theme } = useAppContext();
  const navStyles = `w-full fixed h-10 py-2 px-4 ${theme}`;

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <nav className={`hidden sm:flex sm:items-center gap-2 ${navStyles}`}>
        <NavOptions />
      </nav>
      <nav className={`flex justify-between sm:hidden ${navStyles}`}>
        <BurgerBtn>
          <NavOptions />
        </BurgerBtn>
        <CogBtn />
      </nav>
    </>
  );
};

export default Nav;
