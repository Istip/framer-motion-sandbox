interface Props {
  children: React.ReactNode | string;
  bg?: string;
  color?: string;
  className?: string;
}

export default function Section({ children, bg, color, className }: Props) {
  return (
    <div className={`w-full h-screen ${bg} ${color} ${className}`}>
      {children}
    </div>
  );
}
