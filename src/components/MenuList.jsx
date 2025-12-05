import { useEffect, useState } from "react";

let menuList = [
  { title: "home", id: 1 },
  { title: "about", id: 2 },
  { title: "resume", id: 3 },
  { title: "skills", id: 4 },
  { title: "projects", id: 5 },
  { title: "contact", id: 6 },
];

export default function MenuList({ menuIsOpen, mobileView, onCloseMenu }) {
  const [active, setactive] = useState("");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 200;

      let currentActive = "";

      menuList.forEach(item => {
        const section = document.getElementById(item.title);
        if (section) {
          const sectionTop = section.offsetTop; //distanse from top of page
          const sectionHeight = section.offsetHeight; //height of element

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentActive = item.title;
          }
        }
      });
      setactive(currentActive);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClasses =
    "flex w-full flex-col md:flex-row md:justify-end md:gap-4 pl-6 relative";

  const mobileClasses = menuIsOpen
    ? "z-[100] relative h-fit pb-4 translate-y-0 opacity-100 visible transition-all duration-500 ease-in-out"
    : "h-0 -translate-y-8 opacity-0 invisible transition-all duration-500 ease-in-out";

  return (
    <>
      <ul
        className={`${baseClasses} ${
          mobileView
            ? mobileClasses + " border border-slate-600 border-t-0"
            : ""
        }`}>
        {menuList &&
          menuList.map(listItem => (
            <li
              onClick={() => setactive(listItem.title)}
              className={`${
                active === listItem.title ? "text-base" : "text-white"
              }  text-[18px] pt-4 hover:text-amber-400 duration-300`}
              key={listItem.id}>
              <a
                className="block px-3"
                href={`#${listItem.title}`}
                onClick={onCloseMenu}>
                {listItem.title}
              </a>
            </li>
          ))}
      </ul>
      <h1 className="-translate-y-8 opacity-0 invisible"></h1>
    </>
  );
}
