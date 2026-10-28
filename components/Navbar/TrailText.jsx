"use client";

import React from "react";
import { useTrail, a } from "@react-spring/web";

export const Trail = ({ open, children, ...props }) => {
const items = React.Children.toArray(children);

const trail = useTrail(items.length, {
opacity: open ? 1 : 0,
transform: "rotate(0deg)",
y: open ? 0 : 20,
from: {
opacity: 0,
y: 20,
transform: "rotate(4deg)",
},
config: {
mass: 1,
tension: 280,
friction: 24,
},
});

return (
<div {...props}>
{trail.map((style, index) => (
<a.div key={index} style={style}>
{items[index]}
</a.div>
))} </div>
);
};
