import Image from "next/image";
import styles from "./Footer.module.css";
import { Container } from "@/components/ui/Container";

const columns = [
  { title: "Quick Menu", links: ["Home", "Services", "About Us", "Industries", "Clients", "Products"] },
  { title: "Industries", links: ["Healthcare", "Fintech", "Edtech", "Agriculture", "Government"] },
  { title: "Expertise", links: ["Devops", "Market Research", "Customer Experience", "UX Consulting", "MVP Studio"] },
  { title: "About Us", links: ["History", "Leadership", "Partners", "Press Kit", "Careers"] },
  { title: "Healthcare", links: ["Hospital Management Systems", "Medical Device Tech", "Telemedicine Training"] },
  { title: "Data & AI", links: ["Dataset Development & Mining", "Business AI Integration"] }
];

export function Footer() {
  return (
    <footer className={styles["figmaX-footer"]}>
      <Container>
        <div className={styles["figmaX-footer__top"]}>
          <div className={styles["figmaX-footer__about"]}>
            <Image src="/brand-mark.svg" alt="ABC InfoMed logo" width={44} height={44} />
            <h3>ABC Info Med</h3>
            <p>
              We do not just build, we position you to lead. Your strategic tech partner for end-to-end business
              research, DevOps, and cloud architecture.
            </p>
          </div>
          <div className={styles["figmaX-footer__links"]}>
            {columns.map((column) => (
              <div key={column.title}>
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["figmaX-footer__bottom"]}>Copyright 2025 All Rights Reserved | Terms and Conditions | Privacy Policy</div>
      </Container>
    </footer>
  );
}
