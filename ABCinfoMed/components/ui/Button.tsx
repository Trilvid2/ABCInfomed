import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  ariaLabel?: string;
};

export function Button({ children, variant = "primary", ariaLabel }: ButtonProps) {
  return (
    <button aria-label={ariaLabel} className={`${styles["figmaX-button"]} ${styles[`figmaX-button--${variant}`]}`} type="button">
      {children}
    </button>
  );
}
