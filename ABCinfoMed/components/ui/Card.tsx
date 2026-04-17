import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <article className={`${styles["figmaX-card"]} ${className ?? ""}`.trim()}>{children}</article>;
}
