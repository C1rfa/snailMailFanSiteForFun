import React from "react";

import InteractiveShadow from "./layout/interactiveShadow";
import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <InteractiveShadow style={styles.border}>
        <div className={styles.image}>
          <Image
            src="/images/site/snail-mail.jpeg"
            alt="God, i'm so excited for new Snail Mail album"
            width={300}
            height={300}
          />
        </div>
      </InteractiveShadow>
      <div className={styles.info}>
        <h1>Hi, I'm Lindsey Jordan</h1>
        <p>
          Check out my new head single "Valentine" from my new upcoming album
        </p>
      </div>
    </section>
  );
};

export default Hero;
