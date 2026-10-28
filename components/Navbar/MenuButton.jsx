"use client";

import React, { useRef, useState, useEffect } from "react";
import { a, useSpring } from "@react-spring/web";
import Menu from "./Menu";

const MenuButton = () => {
const [isOpen, setIsOpen] = useState(false);
const offset = 10;
const ref = useRef(null);

const [dots, dotsApi] = useSpring(() => ({
transform: "rotate(0deg)",
}));

const [menu, menuApi] = useSpring(() => ({
y: offset,
opacity: 1,
}));

const [close, closeApi] = useSpring(() => ({
y: offset,
opacity: 0,
}));

const handleMouseEnter = () => {
dotsApi.start({ transform: "rotate(90deg)" });
};

const handleMouseLeave = () => {
if (!isOpen) {
dotsApi.start({ transform: "rotate(0deg)" });
}
};

const handleClick = (nextOpen) => {
menuApi.stop();
closeApi.stop();

menuApi.start({
  y: nextOpen ? -offset : offset,
  opacity: nextOpen ? 0 : 1,
});

closeApi.start({
  y: nextOpen ? -offset : offset,
  opacity: nextOpen ? 1 : 0,
});

};

const closeMenu = () => {
if (!isOpen) return;

setIsOpen(false);
dotsApi.start({ transform: "rotate(0deg)" });
handleClick(false);

};

useEffect(() => {
const handleWindowClick = (event) => {
if (ref.current && !ref.current.contains(event.target)) {
closeMenu();
}
};

document.addEventListener("click", handleWindowClick);

return () => {
  document.removeEventListener("click", handleWindowClick);
};

});

const toggleMenu = () => {
const nextOpen = !isOpen;

setIsOpen(nextOpen);
handleClick(nextOpen);

if (!nextOpen) {
  dotsApi.start({ transform: "rotate(0deg)" });
}

};

return (
<> <Menu
     open={isOpen}
     onClose={closeMenu}
   />

  <div
    ref={ref}
    className={`nav_btn_lg py-6 flex items-center justify-center cursor-pointer transition-colors duration-200 ${
      isOpen ? "bg-bg-alt" : "bg-brgray hover:bg-bg-alt"
    }`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={toggleMenu}
    role="button"
    tabIndex={0}
    aria-expanded={isOpen}
    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    }}
  >
    <div className="flex flex-col h-6 items-center justify-center">
      <a.div style={menu}>MENU&nbsp;&nbsp;</a.div>
      <a.div style={close}>CLOSE&nbsp;&nbsp;</a.div>
    </div>

    <a.div style={dots}>•&nbsp;•</a.div>
  </div>
</>

);
};

export default MenuButton;
