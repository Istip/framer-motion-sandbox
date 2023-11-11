interface Props {
  text: React.ReactNode | string;
  content?: React.ReactNode | string;
  className?: string;
}
export default function HoverMenu({ text, className, content }: Props) {
  return (
    <div
      className={`${
        className ?? ""
      } w-full transition-all ease-in-out duration-500 cursor-pointer flex flex-col
       text-orange-600 hover:text-stone-900 relative overflow-hidden group py-10 px-5`}
    >
      <div className="flex items-center justify-between gap-10">
        <div className="relative z-[1] text-6xl font-bold">{text}</div>
        <div className="relative font-light text-base z-[1] delay-200 transition-all text-transparent group-hover:text-stone-100/75">
          {content}
        </div>
      </div>
      <div className="absolute right-0 transition-all ease-in-out duration-500 top-1/2 h-0 group-hover:h-full bg-orange-600 w-full" />
      <div className="absolute right-0 transition-all ease-in-out duration-500 bottom-1/2 h-0 group-hover:h-full bg-orange-600 w-full" />
    </div>
  );
}
