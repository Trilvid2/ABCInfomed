import styles from "./QuizSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const options = ["Idea without clear MVP", "Early stage startup", "Growing business", "Established enterprise"];

export function QuizSection() {
  return (
    <SectionWrapper className={styles["figmaX-quiz"]}>
      <div className={styles["figmaX-quiz__badge"]}>
        <Badge label="Digital strategy, not full cycle build" />
      </div>
      <article className={styles["figmaX-quiz__card"]}>
        <p>Question 1 of 5</p>
        <h3>What stage is your business currently at?</h3>
        <ul>
          {options.map((option, index) => (
            <li className={index === 0 ? styles["figmaX-quiz__option--active"] : ""} key={option}>
              {option}
            </li>
          ))}
        </ul>
        <div className={styles["figmaX-quiz__actions"]}>
          <Button variant="ghost">Back</Button>
          <Button>Next</Button>
        </div>
      </article>
    </SectionWrapper>
  );
}
