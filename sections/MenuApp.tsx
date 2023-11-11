import HoverMenu from "@/components/HoverMenu/HoverMenu";
import Section from "@/components/Section/Section";
import { hoverMenu } from "@/data/hoverMenu";

export default function MenuApp() {
  return (
    <Section
      bg="bg-stone-900"
      color="text-stone-400"
      className=" flex flex-col items-center justify-center"
    >
      {hoverMenu.map((item) => (
        <HoverMenu key={item.id} text={item.text} content={item.content} />
      ))}
    </Section>
  );
}
