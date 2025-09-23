import Image from "next/image";
import Banner from "./components/banner";
import Intro from "./components/intro";
import SecOne from "./components/secone";
import SecTwo from "./components/sectwo";
import SecThree from "./components/secthree";
import Outro from "./components/outro";
import Footer from "./components/footer";
import TornPaper from "./components/tornpaper"
import TornSvg from "@/assets/torn_paper.svg"
import LoadingScreen from "./components/LoadingScreen";
import FloatingButton from "./components/registration_button";

export default function Home() {
  return (
    <div className="h-screen">
      {/* <LoadingScreen/> */}
      {/* <FloatingButton/> */}
      <Banner/>
      <Intro/>
      <SecOne/>
      <SecTwo/>
      <SecThree/>
      <Outro/>
      <Footer/>
    </div>
  );
}
