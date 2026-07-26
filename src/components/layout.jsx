import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";

function Layout() {
    const [, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <div className="master-wrapper">
      <Header />
      <Navbar />

      <div className="h-[clamp(3.5rem,5vw,9rem)]"></div>
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;