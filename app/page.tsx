import { About } from "@/components/About";
import { CornerNav } from "@/components/CornerNav";
import { Hero } from "@/components/Hero";
import { LenisProvider } from "@/components/LenisProvider";
import { MobileMenu } from "@/components/MobileMenu";
import { TexturedBackground } from "@/components/TexturedBackground";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <LenisProvider>
      <TexturedBackground />
      <CornerNav />
      <MobileMenu />
      <main id="index" className="relative">
        <Hero />
        <WorkGrid />
        <About />
      </main>
    </LenisProvider>
  );
}
