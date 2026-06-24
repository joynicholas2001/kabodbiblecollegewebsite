import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import { Video, Building2, Target, ClipboardCheck } from "lucide-react";

const trainingItems = [
  {
    icon: Video,
    title: "Zoom Live Training",
    description:
      "Join live interactive classes from anywhere. Real-time teaching, Q&A, and fellowship with instructors and fellow students.",
  },
  {
    icon: Building2,
    title: "Offline Ministry Training",
    description:
      "Hands-on ministry experience in local churches and outreach. Apply what you learn in real-world ministry settings.",
  },
  {
    icon: Target,
    title: "Confidence Building Activities",
    description:
      "Structured activities and practicums to grow your confidence in preaching, leading, counseling, and serving.",
  },
  {
    icon: ClipboardCheck,
    title: "Exams and Evaluation",
    description:
      "Regular assessments and exams to reinforce learning and ensure you are well prepared for ministry and further study.",
  },
];

export default function TrainingSection() {
  return (
    <Section variant="white" padding="xl" id="training">
      <SectionHeader
        eyebrow="How We Train"
        heading="Training That Equips"
        subheading="A blend of live online sessions, offline ministry practice, and continuous evaluation to build confident, capable ministers."
        center
        className="mb-12 sm:mb-16"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainingItems.map(({ icon, title, description }) => (
          <FeatureCard
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </Section>
  );
}
