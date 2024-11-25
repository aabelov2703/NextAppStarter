import { RefObject, useEffect } from "react";

const useOutsideClick = (
  enabled: boolean,
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enabled, ref, callback]);
};

export default useOutsideClick;
