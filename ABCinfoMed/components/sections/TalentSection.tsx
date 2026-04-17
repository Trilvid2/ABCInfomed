import Image from "next/image";
import styles from "./TalentSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TalentSection() {
  return (
    <SectionWrapper className={styles["figmaX-talent"]}>
      <Badge label="Africa's Young Talent Advantage" />
      <div className={styles["figmaX-talent__grid"]}>
        <div>
          <h2>Powered by Africa&apos;s Youngest, Most Dynamic Talent Pool</h2>
          <p>
            We are more than a tech company. We are a movement with 77% of Africa&apos;s population under 35.
          </p>
          <div className={styles["figmaX-talent__metrics"]}>
            <article>
              <strong>90%</strong>
              <span>Young talent under 35</span>
            </article>
            <article>
              <strong>50%</strong>
              <span>Remote workforce</span>
            </article>
          </div>
        </div>
        <div className={styles["figmaX-talent__image"]}>
          <Image src="/team-ops.svg" alt="Collaborative engineering team" width={620} height={420} />
        </div>
      </div>
    </SectionWrapper>
  );
}
