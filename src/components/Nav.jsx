// import { useState, useEffect } from "react";
import Container from "./Container.jsx";
import Logo from "./Logo.jsx";
import MenuList from "./MenuList.jsx";

export default function Nav({ handleMenu, mobileView, menuIsOpen }) {
  // const [fixed, setFixed] = useState(false);

  // function handleWindowScroll() {
  //   if (scrollY > 300) {
  //     setFixed(true);
  //   } else {
  //     setFixed(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleWindowScroll);

  //   return () => window.removeEventListener("scroll", handleWindowScroll);
  // }, []);

  let navClasses = `bg-default-black w-full fixed top-0 left-0 z-[200]`;

  // if (fixed) {
  //   // navClasses += " fixed top-0 z-20";
  //   navClasses += " animate-menu";
  // }

  return (
    <nav className={navClasses}>
      <Container classes="relative">
        <Logo title="mohamad" onClickMenu={handleMenu} />
        <MenuList
          mobileView={mobileView}
          menuIsOpen={menuIsOpen}
          onCloseMenu={handleMenu}
        />
      </Container>
    </nav>
  );
}
