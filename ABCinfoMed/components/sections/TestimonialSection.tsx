import styles from "./TestimonialSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonials = [1, 2, 3];

export function TestimonialSection() {
  return (
    <SectionWrapper className={styles["figmaX-testimonial"]}>
      <div className={styles["figmaX-testimonial__badge"]}>
        <Badge label="Hear what our customers and clients think" />
      </div>
      <div className={styles["figmaX-testimonial__list"]}>
        {testimonials.map((id) => (
          <Card className={styles["figmaX-testimonial__card"]} key={id}>
            <p className={styles["figmaX-testimonial__stars"]}>?????</p>
            <p>Amazing product! It transformed how we work. Highly recommended.</p>
            <small>Founder, HealthConnect</small>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
