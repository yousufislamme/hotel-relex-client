import Image from "next/image";
import Hero from "./components/Hero";
import Rooms from "./rooms/page";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Rooms />
      <Testimonial />
    </>
  );
}
