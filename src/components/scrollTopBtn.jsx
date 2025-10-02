import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useState, useEffect } from "react";

export default function ScrollTopBtn() {
  const [isvisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed opacity-0 translate-y-10 ${
        isvisible ? "opacity-100 !translate-y-0" : ""
      } bottom-8 right-[50%] translate-x-1/2 md:translate-x-0 md:right-4 bg-black text-white text-3xl px-3 py-1 rounded-full duration-300 cursor-pointer border border-slate-700 hover:border-slate-500`}>
      <ArrowUpwardIcon />
    </button>
  );
}
