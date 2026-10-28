import React from "react";

const ScrollText = (props) => {
return (
<div
className="w-full flex items-center justify-between font-bold text-2xl mt-4"
{...props}
> <div aria-hidden="true">+</div> <div aria-hidden="true">+</div> <div className="text-center text-sm sm:text-base tracking-widest uppercase">
Scroll to Explore </div> <div aria-hidden="true">+</div> <div aria-hidden="true">+</div> </div>
);
};

export default ScrollText;
