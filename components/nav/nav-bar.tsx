"use client";
import { navConfig } from "@/meta/common";
import Logo from "./logo";
import Search from "../ui/search";
import ThemeToggler from "./theme";
import NavItems from "./nav-items";

const NavBar: React.FC = () => {
  const containerClass = `w-full h-10 flex justify-between items-center p-1 lg:w-[1024px]`;
  const wrapClass = `fixed z-10 w-full flex justify-center bg-dark text-light border-b border-neutral-0`;

  return (
    <nav className={wrapClass}>
      <div className={containerClass}>
        <Logo />
        <NavItems className="w-full" items={navConfig} />
        <div className="flex items-center">
          <Search />
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
