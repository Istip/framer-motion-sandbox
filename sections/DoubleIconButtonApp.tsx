"use client";

import DoubleButton from "@/components/DoubleButton/DoubleButton";
import Section from "@/components/Section/Section";

export default function DoubleIconButtonApp() {
  return (
    <Section className="flex flex-col items-center justify-center bg-stone-900">
      <DoubleButton className="font-light tracking-tighter text-white bg-lime-500">
        Watch case study
      </DoubleButton>
      <br />
      <DoubleButton className="font-light tracking-tighter text-red-400 bg-red-500">
        Watch case study
      </DoubleButton>
      <br />
      <DoubleButton className="font-light tracking-tighter text-stone-900 bg-sky-500">
        Watch case study
      </DoubleButton>
    </Section>
  );
}
