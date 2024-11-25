export const navConfig = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Simple",
    path: "/simple",
  },
  {
    hasSubMenu: true,
    name: "Complex",
    path: "/sub",
    list: [
      { name: "Sub Menu 1", path: "/submenu1" },
      { name: "Sub Menu 2", path: "/submenu2" },
      { name: "Sub Menu 3", path: "/submenu3" },
    ],
  },
  {
    name: "About",
    path: "/about",
  },
];
