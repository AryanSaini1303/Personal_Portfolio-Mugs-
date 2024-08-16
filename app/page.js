import styles from "./page.module.css";
import NavBar from "@/components/navBar";
import IntroSection from "@/components/introSection";
import AboutSection from "@/components/aboutSection";
import ServiceSection from "@/components/serviceSection";
import ProjectSection from "@/components/projectSection";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ModeToogle from "@/components/modeToogle";

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <ModeToogle/>
      <NavBar />
      <IntroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  );
}
