import { NextRequest, NextResponse } from "next/server";
import { getSettings } from "@/lib/admin-data";
import { addSubmission } from "@/lib/admin-data";
import type { AdmissionFormData } from "@/lib/admission-schema";

export async function POST(request: NextRequest) {
  const settings = await getSettings();
  if (settings.admissionsComingSoon) {
    return NextResponse.json(
      { error: "Admissions are currently closed." },
      { status: 403 }
    );
  }

  const body = (await request.json()) as AdmissionFormData;
  const {
    fullName,
    place,
    phone,
    languagesKnown,
    dateOfBirth,
    churchOrMinistry,
    pastorName,
    savedInChrist,
    baptizedInWater,
    musicMinistry,
    education,
    job,
    passionForTheLord,
  } = body;

  if (
    !fullName ||
    !place ||
    !phone ||
    !languagesKnown ||
    !dateOfBirth ||
    !churchOrMinistry ||
    !pastorName ||
    !savedInChrist ||
    !baptizedInWater ||
    !musicMinistry ||
    !education ||
    !job ||
    !passionForTheLord
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const submission = await addSubmission({
    fullName,
    place,
    phone,
    languagesKnown,
    dateOfBirth,
    churchOrMinistry,
    pastorName,
    savedInChrist,
    baptizedInWater,
    musicMinistry,
    education,
    job,
    passionForTheLord,
  });

  return NextResponse.json({ success: true, id: submission.id });
}
