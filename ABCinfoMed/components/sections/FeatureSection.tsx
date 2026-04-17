import styles from "./FeatureSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const features = [
  "Strategic Product Thinking, Not Just Development",
  "Enterprise-Grade Architecture for All Project Sizes",
  "Transparent Process With Real-Time Collaboration",
  "Africa-Centric Experience With Global Delivery Quality"
];

export function FeatureSection() {
  return (
    <SectionWrapper className={styles["figmaX-feature"]} id="features">
      <Badge label="Your Partner for Innovation and Sustainable Growth" />
      <div className={styles["figmaX-feature__grid"]}>
        <div>
          <h2>Why Africa&apos;s Leading Brands Trust Us</h2>
          <p>
            At ABC InfoMed, we combine deep industry expertise with a commitment to excellence, delivering digital
            solutions that are scalable, secure and built for long-term growth.
          </p>
        </div>
        <div className={styles["figmaX-feature__cards"]}>
          {features.map((feature) => (
            <Card key={feature} className={styles["figmaX-feature__card"]}>
              <h3>{feature}</h3>
              <p>
                We don&apos;t just build, we architect solutions that elevate your vision and align with your market.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
