interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string;
  left?: boolean;
}

const DoubleButton: React.FC<Props> = ({
  className,
  children,
  left,
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center group rounded-xl 
      `}
      {...props}
    >
      {left && (
        <div
          className={`font-medium rounded-xl px-4 py-2 transition-all opacity-100 flex
        group-hover:p-0 group-hover:opacity-0 group-hover:text-[2px] duration-500 ${
          className ?? ""
        }`}
        >
          &rsaquo;
        </div>
      )}
      <div
        className={`rounded-xl px-4 mx-[1px] py-2 flex items-center transition-all duration-500 ${
          className ?? ""
        }`}
      >
        {children}
      </div>
      <div
        className={`font-medium rounded-xl group-hover:px-4 group-hover:py-2 transition-all group-hover:opacity-100 flex
        p-0 opacity-0 duration-500 text-[2px] group-hover:text-base ${
          className ?? ""
        }`}
      >
        &rsaquo;
      </div>
    </button>
  );
};

export default DoubleButton;
