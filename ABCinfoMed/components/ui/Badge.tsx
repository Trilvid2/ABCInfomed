import styles from "./Badge.module.css";

type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return <p className={styles["figmaX-badge"]}>{label}</p>;
}
