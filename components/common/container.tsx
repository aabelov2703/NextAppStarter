"use client";
import { useAppContext } from "@/context/appContext";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useAppContext();
  return (
    <div
      className={`w-full flex justify-center p-2 flex-1`}
      style={{
        boxShadow:
          theme === "dark" ? "var(--shadow-dark)" : "var(--shadow-light)",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
