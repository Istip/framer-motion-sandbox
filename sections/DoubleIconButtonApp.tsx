import DoubleButton from "@/components/DoubleButton/DoubleButton";
import Section from "@/components/Section/Section";

export default function DoubleIconButtonApp() {
  return (
    <Section
      bg="bg-stone-900"
      className="flex flex-col items-center justify-center"
    >
      <DoubleButton className="font-light tracking-tighter text-white">
        Watch case study
      </DoubleButton>
      <br />

      <br />
    </Section>
  );
}
