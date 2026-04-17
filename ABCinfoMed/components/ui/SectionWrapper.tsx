import styles from "./SectionWrapper.module.css";
import { Container } from "./Container";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section className={`${styles["figmaX-section-wrapper"]} ${className ?? ""}`.trim()} id={id}>
      <Container>{children}</Container>
    </section>
  );
}
