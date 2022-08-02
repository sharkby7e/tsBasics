import React from "react";

type Props = {
  children?: React.ReactNode;
};
function Layout({ children }: Props) {
  return (
    <div>
      <nav>
        <li>Home</li>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
