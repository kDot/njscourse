import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg"

export default function PerformancePage() {
  return (
    <Hero
    imageData={performanceImg}
    imageAlt="welding"
    title="We service high performance applications"
  />
  );
}
