
"use client";

import LiquidEther from "./LiquidEther/LiquidEther";


const GLOBAL_LIQUID_COLORS = ["#D9E6FF"];


export default function GlobalLiquidBackground() {
  return (
    <div id="global-liquid-background" aria-hidden="true">
      <LiquidEther
        colors={GLOBAL_LIQUID_COLORS}
        mouseForce={15}
        cursorSize={80}
        isViscous={false}
        viscous={30}
        iterationsViscous={16}
        iterationsPoisson={16}
        resolution={0.35}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.3}
        autoIntensity={1.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
}
