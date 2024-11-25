"use client";
import { useAppContext } from "@/context/app-context";
import useOutsideClick from "@/hook/use-outside-click";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

type DropDownProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  noXMark?: boolean;
  close?: () => void;
};

const Dropdown: React.FC<DropDownProps> = ({
  isOpen,
  children,
  className,
  noXMark,
  close,
}) => {
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const { setDropdownOpen } = useAppContext();
  const dropdownClass = `bg-background absolute ${className}`;

  useOutsideClick(isOpen, toggleRef, () => handleClose());

  const handleClose = () => {
    if (close) close();
    setDropdownOpen(false);
  };

  if (!isOpen) return;

  return (
    <div className={dropdownClass} ref={toggleRef}>
      {!noXMark && (
        <div className="w-full flex justify-end">
          <XMarkIcon
            onClick={handleClose}
            className="size-6 p-1 rounded-sm hover:shadow hover:bg-primary-1 hover:text-background transition duration-300"
          />
        </div>
      )}
      <div className=" w-full flex flex-col">{children}</div>
    </div>
  );
};

export default Dropdown;
