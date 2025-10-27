
'use client'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NavbarAfterScroll from "./components/navbarAfterScroll";
import { useEffect, useState } from "react";
export default function Home() {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* {!scrolled ? <Navbar /> : <NavbarAfterScroll />} */}
      <div className="sticky top-0 z-50">
        <Navbar />
        </div>
      <div className="flex-grow p-8 ">
        <h1 className="text-purple-400 text-9xl">Homepage</h1>

      </div>
      <Footer />
    </div>
  );
}
