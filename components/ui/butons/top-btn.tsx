"use client";
import Button from "@/components/common/button";
import { useEffect, useState } from "react";
import Chevron from "../svg/chevron";

const TopBtn = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(window.scrollY > 50);
  };

  console.log("show", show);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);
    return () => {
      window.removeEventListener("scroll", toggleShow);
    };
  }, []);

  return (
    <Button
      color="warning"
      onClick={scrollToTop}
      variant="contained"
      className={`fixed bottom-10 right-10 z-100 ${
        show ? "block" : "hidden"
      } shadow-shadow-1`}
      style={{ padding: "0px 4px 4px 4px" }}
    >
      <Chevron direction="up" size="40" color="#959595" />
    </Button>
  );
};

export default TopBtn;
