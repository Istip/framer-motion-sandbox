import DoubleButton from "@/components/DoubleButton/DoubleButton";
import Section from "@/components/Section/Section";
import DoubleIconButtonApp from "@/sections/DoubleIconButtonApp";
import MenuApp from "@/sections/MenuApp";

export default function Home() {
  return (
    <div className="bg-stone-700">
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
