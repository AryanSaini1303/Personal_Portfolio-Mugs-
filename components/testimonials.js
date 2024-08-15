"use client";
import { useState, useEffect } from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      image: "/demoImage1.jpg",
      name: "Alex Simpson",
      role: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id officia, iste ullam, laborum ipsum deleniti maxime cupiditate non fuga tempora aliquid architecto illo sunt eaque porro iusto obcaecati a?",
    },
    {
      id: 2,
      image: "/demoImage2.jpg",
      name: "Roger Buffet",
      role: "CTO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id officia, iste ullam, laborum ipsum deleniti maxime cupiditate non fuga tempora aliquid architecto illo sunt eaque porro iusto obcaecati a?",
    },
    {
      id: 3,
      image: "/demoImage3.jpg",
      name: "Joey Geller",
      role: "CFO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id officia, iste ullam, laborum ipsum deleniti maxime cupiditate non fuga tempora aliquid architecto illo sunt eaque porro iusto obcaecati a?",
    },
    {
      id: 4,
      image: "/demoImage4.jpg",
      name: "Martin Jonas",
      role: "COO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id officia, iste ullam, laborum ipsum deleniti maxime cupiditate non fuga tempora aliquid architecto illo sunt eaque porro iusto obcaecati a?",
    },
    // Add more items if needed
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1500); // Change slide every 1 second

    return () => clearInterval(intervalId);
  }, [items.length]);

  const getVisibleItems = () => {
    const firstIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % items.length;
    const thirdIndex = (currentIndex + 2) % items.length;
    return [items[firstIndex], items[secondIndex], items[thirdIndex]];
  };

  return (
    <div className={styles.container} id="testimonials">
      <header>
        <h1>Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          quis incidunt non deleniti tempora qui voluptas molestias libero totam
          recusandae.
        </p>
      </header>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {getVisibleItems().map((item, index) => (
            <div
              key={item.id}
              className={styles.carouselItem}
              style={index === 1 ? { zIndex: "1000" } : null}
            >
              <img
                src={item.image}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemText}>
                <p>
                  <span className={styles.firstQuotes}>
                    <Image src={"/quotes.png"} height={10} width={10} alt="" />
                  </span>
                  {item.text}
                  <span className={styles.secondQuotes}>
                    <Image src={"/quotes.png"} height={10} width={10} alt="" />
                  </span>
                </p>
                <div className={styles.info}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.indicators}>
          {items.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.indicator} ${
                currentIndex === idx ? styles.active : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
