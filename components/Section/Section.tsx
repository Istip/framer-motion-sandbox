interface Props {
  children: React.ReactNode | string;
  className?: string;
}

export default function Section({ children, className = "" }: Props) {
  return <div className={`w-full h-screen  ${className}`}>{children}</div>;
}
