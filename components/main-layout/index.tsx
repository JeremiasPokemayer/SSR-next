import { ReactNode } from "react";
// const styles = {
//   border: "solid 2px black",
//   padding: 30,
//   fontSize: 30,
// };
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>Aca esta el header</header>
      <div>{children}</div>
      <footer>Aca esta el footer</footer>
    </div>
  );
}
