interface MainProps {
  children: React.ReactNode;
}
export function Main({ children }: MainProps) {
  return <main>{children}</main>;
}
