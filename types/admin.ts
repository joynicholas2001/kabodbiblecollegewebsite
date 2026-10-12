export type SiteSettings = {
  admissionsComingSoon: boolean;
  admissionsComingSoonMessage: string;
  showAnnouncement: boolean;
  announcementText: string;
  /** Editable text keys for the website */
  content: Record<string, string>;
};

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  admissionsComingSoon: false,
  admissionsComingSoonMessage: "Admissions will open soon. Please check back later.",
  showAnnouncement: false,
  announcementText: "Welcome to Kabod Bible College - Admissions for the new batch are now open!",
  content: {
    heroTitle: "Kabod Bible College",
    heroSubtitle: "Training disciples filled with the Holy Spirit",
    admissionPageTitle: "Kabod Bible College Admission Form",
    admissionPageIntro: "Greetings in the mighty name of Jesus Christ. Kabod Bible College welcomes you. Please complete your admission process below.",
  },
};

export type AdmissionSubmission = {
  id: string;
  fullName: string;
  place: string;
  phone: string;
  languagesKnown: string;
  dateOfBirth: string;
  churchOrMinistry: string;
  pastorName: string;
  savedInChrist: string;
  baptizedInWater: string;
  musicMinistry: string;
  education: string;
  job: string;
  passionForTheLord: string;
  submittedAt: string;
};
