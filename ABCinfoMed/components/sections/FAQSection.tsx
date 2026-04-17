import styles from "./FAQSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const faqs = [
  { q: "Name Of Question 1", a: "" },
  { q: "Name Of Question 2", a: "Answer to Question 2" },
  { q: "Name Of Question 3", a: "" },
  { q: "Name Of Question 4", a: "" },
  { q: "Name Of Question 5", a: "" }
];

export function FAQSection() {
  return (
    <SectionWrapper className={styles["figmaX-faq"]} id="faq">
      <Badge label="FAQ" />
      <div className={styles["figmaX-faq__grid"]}>
        <h2>Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <article className={styles["figmaX-faq__item"]} key={faq.q}>
              <header>
                <h3>{faq.q}</h3>
                <span>{index === 1 ? "x" : "+"}</span>
              </header>
              {faq.a && <p>{faq.a}</p>}
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
