import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg"

export default function ScalePage() {
  return (
    <Hero
    imageData={scaleImg}
    imageAlt="steel factory"
    title="Scale your app to infinity"
  />
  );
}
