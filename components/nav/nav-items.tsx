import useOutsideClick from "@/hook/use-outside-click";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import NavItem from "./nav-item";
import { NavItemType } from "@/types/nav-item";

type NavItemProps = {
  className?: string;
  items: NavItemType[];
};

const NavItems: React.FC<NavItemProps> = ({ className, items }) => {
  const pathName = usePathname();
  const [showBurger, setShowBurger] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  const buttonClass = `w-9 py-[6px] h-7 px-2 rounded-sm hover:shadow hover:text-warning`;
  const menuWrapClass = `fixed w-full flex flex-col left-0 top-[37px] pb-1 bg-dark text-light`;

  useOutsideClick(showBurger, toggleRef, () => setShowBurger(false));

  const openBurger = () => {
    setShowBurger(true);
  };

  const renderNavItems = (extraProps = {}) =>
    items.map((item) => (
      <NavItem
        key={item.name}
        name={item.name}
        active={pathName === item.path}
        path={item.path}
        hasSubMenu={item.hasSubMenu}
        list={item.list}
        {...extraProps}
      />
    ));

  return (
    <div className={className} ref={toggleRef}>
      <div className="block md:hidden">
        {!showBurger ? (
          <button className={buttonClass} onClick={openBurger}>
            <Bars3Icon />
          </button>
        ) : (
          <div className={menuWrapClass}>
            {renderNavItems({
              className: "px-4",
              showBurger: showBurger,
              action: () => setShowBurger(false),
            })}
          </div>
        )}
      </div>
      <div className="hidden md:flex">{renderNavItems()}</div>
    </div>
  );
};

export default NavItems;
