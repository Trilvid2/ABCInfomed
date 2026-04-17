import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { Container } from "@/components/ui/Container";

const links = ["Home", "Services", "About Us", "Industries", "Clients", "Products"];

export function Header() {
  return (
    <header className={styles["figmaX-header"]}>
      <Container className={styles["figmaX-header__inner"]}>
        <Link href="/" className={styles["figmaX-header__brand"]} aria-label="ABC InfoMed home">
          <Image src="/brand-mark.svg" alt="ABC InfoMed logo" width={56} height={56} priority />
          <span>ABC InfoMed</span>
        </Link>
        <nav className={styles["figmaX-header__nav"]} aria-label="Primary navigation">
          {links.map((link, index) => (
            <a
              className={`${styles["figmaX-header__nav-item"]} ${index === 0 ? styles["figmaX-header__nav-item--active"] : ""}`}
              href={link}
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
