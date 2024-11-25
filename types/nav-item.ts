export type NavItemType = {
  name: string;
  path: string;
  hasSubMenu?: boolean;
  list?: { name: string; path: string }[];
};
