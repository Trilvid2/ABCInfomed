import styles from "./RoadmapSection.module.css";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const phases = [
  { phase: "Phase 1", title: "Foundation", items: ["User authentication & KYC", "Basic transaction processing", "Wallet management system"] },
  { phase: "Phase 2", title: "Growth", items: ["Multi-currency support", "Transaction history/analytics", "Push notifications"] },
  { phase: "Phase 3", title: "Scale", items: ["Advanced fraud detection", "API for third-party integrations", "Regulatory compliance features"] }
];

export function RoadmapSection() {
  return (
    <SectionWrapper className={styles["figmaX-roadmap"]} id="roadmap">
      <Badge label="Envision a Digital Roadmap from Idea to Launch" />
      <h2>MVP Studio Roadmaps</h2>
      <div className={styles["figmaX-roadmap__tabs"]}>
        <button type="button">Fintech</button>
        <button type="button">Ecommerce</button>
        <button type="button">Healthcare</button>
        <button type="button">SaaS</button>
      </div>
      <div className={styles["figmaX-roadmap__grid"]}>
        {phases.map((phase) => (
          <Card key={phase.phase} className={styles["figmaX-roadmap__card"]}>
            <span>{phase.phase}</span>
            <h3>{phase.title}</h3>
            <ul>
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className={styles["figmaX-roadmap__action"]}>
        <Button>Start Building Your MVP</Button>
      </div>
    </SectionWrapper>
  );
}
