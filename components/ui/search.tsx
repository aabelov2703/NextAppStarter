import { useAppContext } from "@/context/app-context";
import useOutsideClick from "@/hook/use-outside-click";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

const Search = () => {
  const { searchOpen, setSearchOpen } = useAppContext();
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputClass = `w-full min-w-[90px] pl-7 h-6 rounded-full bg-dark text-light focus:opacity-100 outline-none outline-1 outline-offset-0 focus:outline-neutral-0`;
  const searchClass = `px-2 relative ${!searchOpen ? "hidden md:block" : ""} `;
  const smallGlassClass = `flex md:hidden w-5`;

  useOutsideClick(searchOpen, toggleRef, () => setSearchOpen(false));

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      target.value = "";
      setSearchOpen(false);
    }
  };

  return (
    <>
      {!searchOpen && (
        <div className="py-1 px-2 hover:shadow hover:opacity-100 hover:text-warning">
          <MagnifyingGlassIcon
            className={smallGlassClass}
            onClick={() => setSearchOpen((prev: boolean) => !prev)}
          />
        </div>
      )}
      <div className={searchClass} ref={toggleRef}>
        <MagnifyingGlassIcon className="absolute left-3 top-[2px] w-5 text-light" />
        <input
          className={inputClass}
          ref={inputRef}
          type="text"
          onKeyUp={onKeyUp}
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default Search;
