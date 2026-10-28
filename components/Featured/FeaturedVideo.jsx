"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const FeaturedVideo = ({ refForward, ...props }) => {
const imageRef = useRef(null);
const [progress, setProgress] = useState(0);

const { scrollYProgress } = useScroll({
target: refForward,
layoutEffect: false,
});

useMotionValueEvent(scrollYProgress, "change", (value) => {
setProgress(value);
});

return (
<motion.div
ref={imageRef}
initial={{ opacity: 0, scale: 0.96 }}
animate={{
opacity: 1,
scale: progress > 0.5 ? 1.03 : 1,
}}
transition={{ duration: 0.45, ease: "easeOut" }}
className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-3xl"
{...props}
> <Image
     src="/nomaan.png"
     alt="Nomaan Killedar"
     fill
     priority
     sizes="(max-width: 767px) 85vw, 40vw"
     className="object-cover"
   />
</motion.div>
);
};

export default FeaturedVideo;
