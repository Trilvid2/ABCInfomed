import Image from "next/image";
import styles from "./HeroSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function HeroSection() {
  return (
    <SectionWrapper className={styles["figmaX-hero"]} id="hero">
      <div className={styles["figmaX-hero__badge-wrap"]}>
        <Badge label="Every hope is worth it" />
      </div>
      <div className={styles["figmaX-hero__cards"]}>
        <article className={styles["figmaX-hero__card"]}>
          <Image src="/analytics.svg" alt="Business analytics" width={280} height={220} />
        </article>
        <article className={`${styles["figmaX-hero__card"]} ${styles["figmaX-hero__card--featured"]}`}>
          <Image src="/brain-network.svg" alt="AI and neural architecture" width={460} height={300} />
        </article>
        <article className={styles["figmaX-hero__card"]}>
          <Image src="/blocks-tech.svg" alt="Modern tech stack" width={280} height={220} />
        </article>
      </div>
    </SectionWrapper>
  );
}
