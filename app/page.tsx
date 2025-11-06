'use client'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NavbarAfterScroll from "./components/navbarAfterScroll";
import Slider from "./components/slider";
import { useEffect, useState } from "react";
import ServiceSection from "./components/ServiceSection";
import ProjectAndTeam from "./components/ProjectAndTeam";
import Lastsection from "./components/lastsection";
import ContactUs from "./components/contactUs";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen ">
      {/* <div className="sticky top-0 z-50"> */}
        <Navbar />
      {/* </div> */}
      <Slider />
      <ServiceSection />
      <ProjectAndTeam/>
      <Lastsection/>
      <ContactUs/>
      <Footer />
    </div>
  );
}
