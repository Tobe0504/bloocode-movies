import React from "react";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

// Types
type LayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutTypes) => {
  return (
    <main className={`h-screen relative z-10 ${className}`}>
      <Header />
      <section className="h-full">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
