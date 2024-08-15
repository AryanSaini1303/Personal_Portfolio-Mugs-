"use client";
import Image from "next/image";
import styles from "./introSection.module.css";
import { useState } from "react";
export default function IntroSection() {
  const [hover, setHover] = useState({});
  function handleMouseEnter(social){
    setHover((prevValue)=>({...prevValue, [social]:true}));
  }
  function handleMouseLeave(social){
    setHover((prevValue)=>({...prevValue, [social]:false}));
  }
  const customStyle={
    paddingBottom:"0.8rem",
    transform:"scale(1.3,1.3)"
  }
  return (
    <div className={styles.container} id="home">
      <section className={styles.infoSection}>
        <h4>Hi I am</h4>
        <h3>Muhammad Umair</h3>
        <h1>
          UI & UX <br />
          <span className={styles.indent}>Designer</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          officia doloremque dolore iusto non architecto quisquam voluptatem
          placeat distinctio fuga.
        </p>
        <button>Hire me</button>
      </section>
      <section className={styles.photoSection}>
        <div className={styles.block}></div>
        <div className={styles.frame}>
          <Image
            src={"/portraits/first_image/image11.png"}
            width={310}
            height={310}
            className={styles.firstImage}
            alt=""
          />
          <Image
            src={"/portraits/first_image/image12.png"}
            width={340}
            height={220}
            className={styles.secondImage}
            alt=""
          />
        </div>
        <div className={styles.socials}>
          <button onMouseEnter={()=>{handleMouseEnter('facebook')}} onMouseLeave={()=>{handleMouseLeave('facebook')}} style={hover.facebook?customStyle:null}>
            <a href="https://m.facebook.com/" target="_blank" rel="noopener noreferrer"><Image src={"/logos/facebook_logo.png"} width={20} height={20} alt=""/></a>
          </button>
          <button onMouseEnter={()=>{handleMouseEnter('X')}} onMouseLeave={()=>{handleMouseLeave('X')}} style={hover.X?customStyle:null}>
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><Image src={"/logos/X_logo.png"} width={20} height={20} alt=""/></a>
          </button>
          <button onMouseEnter={()=>{handleMouseEnter('instagram')}} onMouseLeave={()=>{handleMouseLeave('instagram')}} style={hover.instagram?customStyle:null}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Image src={"/logos/instagram_logo.png"} width={20} height={20} alt=""/></a>
          </button>
          <button onMouseEnter={()=>{handleMouseEnter('linkedIn')}} onMouseLeave={()=>{handleMouseLeave('linkedIn')}} style={hover.linkedIn?customStyle:null}>
            <a href="https://www.linkedin.com/hp" target="_blank" rel="noopener noreferrer"><Image src={"/logos/linkedIn_logo.png"} width={20} height={20} alt=""/></a>
          </button>
        </div>
      </section>
    </div>
  );
}
