import styles from "./SuccessStoriesSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const cards = Array.from({ length: 5 }, (_, index) => index + 1);

export function SuccessStoriesSection() {
  return (
    <SectionWrapper className={styles["figmaX-success"]} id="clients">
      <div className={styles["figmaX-success__header"]}>
        <Badge label="See What We've Built for Clients" />
        <h2>Real Success Stories From Our Partners</h2>
      </div>
      <div className={styles["figmaX-success__grid"]}>
        {cards.map((card) => (
          <article className={styles["figmaX-success__card"]} key={card} />
        ))}
      </div>
    </SectionWrapper>
  );
}
