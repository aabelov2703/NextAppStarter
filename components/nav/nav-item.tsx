import Link from "next/link";
import { NavItemType } from "@/types/nav-item";
import { useRef, useState } from "react";
import useOutsideClick from "@/hook/use-outside-click";

type navItemProps = NavItemType & {
  className?: string;
  active: boolean;
  action?: () => void;
  showBurger?: boolean;
};

const NavItem: React.FC<navItemProps> = ({ name, active, path, ...rest }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(showSubMenu, toggleRef, () => setShowSubMenu(false));

  const navItemClass = `flex py-1 px-2 h-7 rounded-sm hover:shadow hover:text-warning hover:cursor-pointer
    ${active ? "active font-normal" : ""} 
    ${rest?.className}`;

  const extraNavClass = `${navItemClass} after:content-['🢓'] space-x-1 relative group inline-block `;
  const ulClass = `absolute z-10 pb-1 border border-neutral shadow-lg text-nowrap bg-dark text-light
      ${showSubMenu ? "flex flex-col" : "hidden"}
      ${rest?.showBurger ? "top-0 left-14" : "top-7 left-0"} min-w-[100px] `;
  const liClass = `py-1 px-4 hover:shadow hover:text-warning`;

  const closeSubMenu = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLUListElement>
  ) => {
    e.stopPropagation();
    setShowSubMenu(false);
    if (rest?.action) rest.action();
  };

  return rest.hasSubMenu && rest.list ? (
    // Handle dropdown sub-menu
    <div
      className={extraNavClass}
      onClick={() => setShowSubMenu(true)}
      ref={toggleRef}
    >
      {name}
      <ul className={ulClass} onClick={closeSubMenu}>
        {rest.list.map((item) => (
          <Link
            key={item.name}
            className={liClass}
            href={`${path.toLowerCase()}${item.path}`}
            onClick={closeSubMenu}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  ) : (
    // single menu item
    <Link className={navItemClass} href={path} onClick={rest?.action}>
      {name}
    </Link>
  );
};

export default NavItem;
