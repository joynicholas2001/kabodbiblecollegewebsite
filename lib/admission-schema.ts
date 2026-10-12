import { z } from "zod";

export const admissionFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required / పూర్తి పేరు అవసరం"),
  place: z.string().min(1, "Place is required / స్థలం అవసరం"),
  phone: z
    .string()
    .min(1, "Phone number is required / ఫోన్ నెంబర్ అవసరం")
    .regex(/^\d{10,}$/, "Phone number must be at least 10 digits / ఫోన్ నెంబర్ కనీసం 10 అంకెలు ఉండాలి"),
  languagesKnown: z.string().min(1, "Languages known is required / మీకు తెలిసిన భాషలు అవసరం"),
  dateOfBirth: z.string().min(1, "Date of birth is required / పుట్టిన తేదీ అవసరం"),
  churchOrMinistry: z
    .string()
    .min(1, "Church or ministry associated with is required / చర్చి లేదా పరిచర్య పేరు అవసరం"),
  pastorName: z.string().min(1, "Pastor name is required / పాస్టర్ గారి పేరు అవసరం"),
  savedInChrist: z.enum(["Yes", "No"], {
    message: "Please select an option / దయచేసి ఒక ఎంపికను ఎంచుకోండి",
  }),
  baptizedInWater: z.enum(["Yes", "No"], {
    message: "Please select an option / దయచేసి ఒక ఎంపికను ఎంచుకోండి",
  }),
  musicMinistry: z.enum(["Yes", "No"], {
    message: "Please select an option / దయచేసి ఒక ఎంపికను ఎంచుకోండి",
  }),
  education: z.string().min(1, "Education is required / విద్యార్హతలు అవసరం"),
  job: z.string().min(1, "Job is required / ఉద్యోగం అవసరం"),
  passionForTheLord: z
    .string()
    .min(1, "Passion for the Lord is required / దేవుని పట్ల మీకున్న ఆసక్తి అవసరం")
    .min(20, "Please write at least 20 characters / కనీసం 20 అక్షరాలు రాయండి"),
});

export type AdmissionFormData = z.infer<typeof admissionFormSchema>;
