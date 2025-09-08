import { useState, useContext } from "react";
import Nav from "./Nav.jsx";
import Container from "./Container.jsx";
import HeaderTxt from "./HeaderTxt.jsx";
import HeaderPhoto from "./HeaderPhoto.jsx";
import { windowSizeCtx } from "../store/windowSize.jsx";
export default function Header() {
  const { mobileView } = useContext(windowSizeCtx);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleClickMenu() {
    setMenuIsOpen(prevState => !prevState);
  }
  return (
    <div className="max-w-[1280px] mx-auto">
      <header className="h-screen flex flex-col" id="home">
        <Nav
          handleMenu={handleClickMenu}
          mobileView={mobileView}
          menuIsOpen={menuIsOpen}
        />
        {/* header content wrapper */}
        <Container className="flex flex-wrap h-full relative">
          <HeaderTxt />
          <HeaderPhoto isMobile={mobileView} />
        </Container>
      </header>
    </div>
  );
}
