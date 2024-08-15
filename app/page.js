import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/navBar";
import IntroSection from "@/components/introSection";

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <NavBar/>
      <IntroSection/>
    </section>
  );
}
