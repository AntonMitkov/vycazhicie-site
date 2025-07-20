import Image from "next/image";
import Banner from "./components/banner";
import Intro from "./components/intro";
import SecOne from "./components/secone";
import SecTwo from "./components/sectwo";
import SecThree from "./components/secthree";
import Outro from "./components/outro";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="h-screen">
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
