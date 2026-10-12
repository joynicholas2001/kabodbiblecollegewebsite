import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SubjectCard from "@/components/ui/SubjectCard";
import {
  BookOpen,
  BookMarked,
  Globe,
  Users,
  Flame,
  Cross,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const subjects = [
  { icon: BookOpen, title: "Old Testament Survey" },
  { icon: BookMarked, title: "New Testament Survey" },
  { icon: Globe, title: "Missions and Evangelism" },
  { icon: Users, title: "Discipleship" },
  { icon: Flame, title: "Person and Work of Holy Spirit" },
  { icon: Cross, title: "Christology" },
  { icon: Sparkles, title: "Understanding Prophetic" },
];

export default function ProgramsSection() {
  return (
    <Section variant="white" padding="xl" id="programs" className="border-t border-brand-border/60">
      <SectionHeader
        eyebrow="Our Curriculum"
        heading="Programs & Subjects"
        subheading="Core subjects designed to ground you in Scripture, Spirit, and ministry practice."
        center
        className="mb-14 sm:mb-16"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {subjects.map(({ icon, title }) => (
          <SubjectCard key={title} icon={icon} title={title} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/programs" className="btn-primary">
          <span>View Full Programs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
