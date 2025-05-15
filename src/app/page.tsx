import Features from "@/shared/components/landing/features";
import Footer from "@/shared/components/landing/footer";
import Header from "@/shared/components/landing/header";
import Hero from "@/shared/components/landing/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-manrope">
      <section className="flex flex-col items-center justify-center gap-24">
      <Header/>
      <Hero/>
      <Features/>
      <Footer/>
      </section>
    </main>
  );
}
