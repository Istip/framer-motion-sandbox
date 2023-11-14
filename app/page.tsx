"use client";

import DoubleButton from "@/components/DoubleButton/DoubleButton";
import Section from "@/components/Section/Section";
import MenuApp from "@/sections/MenuApp";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 0.8], ["0", "100%"]);

  return (
    <div className="bg-stone-700 overflow-hidden">
      <div className="bg-stone-800 w-screen h-screen flex items-center justify-center">
        <div className="relative">
          <h1 className="p-10 font-black z-10 text-7xl mix-blend-exclusion text-opacity-0 bg-green-500 relative">
            BERKI PIROSKA
          </h1>
          <div className="absolute left-0 top-0 bottom-0 right-0 bg-slate-100" />
        </div>
      </div>

      <div
        ref={ref}
        className="bg-stone-900 flex flex-col w-screen h-screen items-center justify-between"
      >
        <Marquee autoFill className="relative">
          <motion.h1
            style={{ width }}
            transition={{ duration: 2, type: "spring" }}
            className="[font-size:_clamp(16px,5vw,120px)] font-black top-0 text-stone-100 absolute w-[200px] overflow-hidden"
          >
            Everything is upside down
          </motion.h1>
          <h1 className="[font-size:_clamp(16px,5vw,120px)] font-black text-stone-100/10">
            Everything is upside down
          </h1>
        </Marquee>

        <div className="relative whitespace-nowrap">
          <motion.h1
            style={{ width }}
            className="[font-size:_clamp(16px,5vw,120px)] font-black text-lime-500 absolute w-[200px] overflow-hidden"
          >
            Everything is upside down
          </motion.h1>
          <h1 className="[font-size:_clamp(16px,5vw,120px)] font-black text-lime-100/5">
            Everything is upside down
          </h1>
        </div>
      </div>
      <Section className="bg-stone-800 flex items-center justify-center">
        <div>
          <DoubleButton className="bg-stone-900 text-stone-500">
            Check more
          </DoubleButton>
          <br />
          <DoubleButton left className="bg-sky-900 text-sky-200">
            Visti page
          </DoubleButton>
        </div>
      </Section>
      <MenuApp />
    </div>
  );
}
