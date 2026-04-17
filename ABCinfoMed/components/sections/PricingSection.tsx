import styles from "./PricingSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function PricingSection() {
  return (
    <SectionWrapper className={styles["figmaX-pricing"]} id="services">
      <div className={styles["figmaX-pricing__header"]}>
        <Badge label="Explore Our Full Suite of Services" />
        <h1>Solutions Built for Every Business Need</h1>
      </div>
      <div className={styles["figmaX-pricing__grid"]}>
        <article className={styles["figmaX-pricing__card"]} />
        <article className={styles["figmaX-pricing__card"]} />
        <article className={styles["figmaX-pricing__card"]} />
        <article className={styles["figmaX-pricing__card"]} />
        <article className={`${styles["figmaX-pricing__card"]} ${styles["figmaX-pricing__card--wide"]}`} />
      </div>
    </SectionWrapper>
  );
}
