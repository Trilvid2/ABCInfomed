import styles from "./CTASection.module.css";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className={styles["figmaX-cta"]}>
      <Container>
        <article className={styles["figmaX-cta__card"]}>
          <div>
            <h2>Translate Your Vision to a Working Solution</h2>
            <p>
              From concept to scalable product: leverage our expertise in DevOps, Cloud Architecture and Business
              Research to build your market-ready MVP fast.
            </p>
          </div>
          <Button ariaLabel="Book consultation">Book Consultation</Button>
        </article>
      </Container>
    </section>
  );
}
