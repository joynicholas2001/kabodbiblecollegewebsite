import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import type { SiteSettings } from "@/types/admin";
import { DEFAULT_SITE_SETTINGS } from "@/types/admin";
import type { AdmissionSubmission } from "@/types/admin";

const DATA_DIR = join(process.cwd(), "data");
const SETTINGS_PATH = join(DATA_DIR, "site-settings.json");
const SUBMISSIONS_PATH = join(DATA_DIR, "admission-submissions.json");

export async function getSettings(): Promise<SiteSettings> {
  try {
    const raw = await readFile(SETTINGS_PATH, "utf-8");
    const data = JSON.parse(raw) as Partial<SiteSettings>;
    return { ...DEFAULT_SITE_SETTINGS, ...data };
  } catch {
    return { ...DEFAULT_SITE_SETTINGS };
  }
}

export async function saveSettings(settings: SiteSettings): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(SETTINGS_PATH, JSON.stringify(settings, null, 2), "utf-8");
}

export async function getSubmissions(): Promise<AdmissionSubmission[]> {
  try {
    const raw = await readFile(SUBMISSIONS_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function addSubmission(
  data: Omit<AdmissionSubmission, "id" | "submittedAt">
): Promise<AdmissionSubmission> {
  await mkdir(DATA_DIR, { recursive: true });
  const list = await getSubmissions();
  const submission: AdmissionSubmission = {
    ...data,
    id: `adm-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    submittedAt: new Date().toISOString(),
  };
  list.unshift(submission);
  await writeFile(SUBMISSIONS_PATH, JSON.stringify(list, null, 2), "utf-8");
  return submission;
}
