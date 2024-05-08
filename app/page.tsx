import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

export default function home() {
  return(
    <div className="bg-black text-white text-center">
    <Header/>
    <Banner/>
    <Courses/>
    <Footer/>
    </div>
  )
}