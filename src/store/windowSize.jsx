import { createContext, useState, useEffect } from "react";

export const windowSizeCtx = createContext({
    mobileView: window.innerWidth < 768,
    setMobileView: () => {}
});

export default function WindowSizeProvider({ children }) {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);


  useEffect(() => {
    function handleResize() {
        setMobileView(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const winSizeValue = {
    mobileView,
    setMobileView,
  }


  return <windowSizeCtx.Provider value={winSizeValue}>{children}</windowSizeCtx.Provider>
}
