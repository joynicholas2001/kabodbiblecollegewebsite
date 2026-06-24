"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  admissionFormSchema,
  type AdmissionFormData,
} from "@/lib/admission-schema";
import { cn } from "@/lib/utils";

async function submitAdmission(data: AdmissionFormData): Promise<void> {
  const res = await fetch("/api/admission", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.status === 403) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? "Admissions are currently closed.");
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? "Submission failed. Please try again.");
  }
}

const RADIO_OPTIONS = ["Yes", "No"] as const;

export default function AdmissionForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      savedInChrist: undefined,
      baptizedInWater: undefined,
      musicMinistry: undefined,
    },
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setSubmitError(null);
    try {
      await submitAdmission(data);
      setSubmitSuccess(true);
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : "Submission failed.");
    }
  };

  if (submitSuccess) {
    return (
      <div className="rounded-2xl bg-white p-8 sm:p-10 text-center shadow-xl border border-gray-100">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-purple mb-3">
          Form Submitted Successfully / <span className="font-telugu">ఫారమ్ విజయవంతంగా సమర్పించబడింది</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Your admission form has been submitted successfully. The team of Kabod
          Bible College will contact you regarding the next steps for your
          admission. / <span className="font-telugu">మీ అడ్మిషన్ ఫారమ్ విజయవంతంగా సమర్పించబడింది. మీ అడ్మిషన్ తదుపరి చర్యల కోసం కబోద్ బైబిల్ కాలేజీ బృందం మిమ్మల్ని సంప్రదిస్తుంది.</span>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-gray-100"
    >
      {submitError && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}
      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            FullName / <span className="font-telugu">పూర్తి పేరు</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.fullName ? "border-red-500" : "border-gray-200"
            )}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Place */}
        <div>
          <label
            htmlFor="place"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Place / <span className="font-telugu">స్థలం</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="place"
            type="text"
            {...register("place")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.place ? "border-red-500" : "border-gray-200"
            )}
            placeholder="City / Town / State (స్థలం / మండలం / జిల్లా)"
          />
          {errors.place && (
            <p className="mt-1.5 text-sm text-red-500">{errors.place.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Phone Number / <span className="font-telugu">ఫోన్ నెంబర్</span> (WhatsApp & Calls) <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.phone ? "border-red-500" : "border-gray-200"
            )}
            placeholder="10 digits or more (numbers only)"
          />
          {errors.phone && (
            <p className="mt-1.5 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Languages Known */}
        <div>
          <label
            htmlFor="languagesKnown"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Languages Known / <span className="font-telugu">మీకు తెలిసిన భాషలు</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="languagesKnown"
            type="text"
            {...register("languagesKnown")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.languagesKnown ? "border-red-500" : "border-gray-200"
            )}
            placeholder="e.g. English, Hindi, Tamil"
          />
          {errors.languagesKnown && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.languagesKnown.message}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Date of Birth / <span className="font-telugu">పుట్టిన తేదీ</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="dateOfBirth"
            type="date"
            {...register("dateOfBirth")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.dateOfBirth ? "border-red-500" : "border-gray-200"
            )}
          />
          {errors.dateOfBirth && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>

        {/* Church or Ministry */}
        <div>
          <label
            htmlFor="churchOrMinistry"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Church or Ministry Associated With / <span className="font-telugu">మీరు వెళ్తున్న చర్చి లేదా పరిచర్య పేరు</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="churchOrMinistry"
            type="text"
            {...register("churchOrMinistry")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.churchOrMinistry ? "border-red-500" : "border-gray-200"
            )}
            placeholder="Church or ministry name"
          />
          {errors.churchOrMinistry && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.churchOrMinistry.message}
            </p>
          )}
        </div>

        {/* Pastor Name */}
        <div>
          <label
            htmlFor="pastorName"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Pastor Name / <span className="font-telugu">మీ పాస్టర్ గారి పేరు</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="pastorName"
            type="text"
            {...register("pastorName")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.pastorName ? "border-red-500" : "border-gray-200"
            )}
            placeholder="Your pastor's name"
          />
          {errors.pastorName && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.pastorName.message}
            </p>
          )}
        </div>

        {/* Saved in Christ */}
        <div>
          <p className="block text-sm font-semibold text-gray-700 mb-2">
            Saved in Christ / <span className="font-telugu">మీరు రక్షించబడ్డారా?</span> <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-6">
            {RADIO_OPTIONS.map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("savedInChrist")}
                  className="h-4 w-4 border-gray-300 text-brand-purple focus:ring-brand-purple"
                />
                <span className="text-gray-700">{value === "Yes" ? <span>Yes / <span className="font-telugu">అవును</span></span> : <span>No / <span className="font-telugu">కాదు</span></span>}</span>
              </label>
            ))}
          </div>
          {errors.savedInChrist && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.savedInChrist.message}
            </p>
          )}
        </div>

        {/* Baptized in Water */}
        <div>
          <p className="block text-sm font-semibold text-gray-700 mb-2">
            Baptized in Water / <span className="font-telugu">మీరు నీటి బాప్తిస్మం తీసుకున్నారా?</span> <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-6">
            {RADIO_OPTIONS.map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("baptizedInWater")}
                  className="h-4 w-4 border-gray-300 text-brand-purple focus:ring-brand-purple"
                />
                <span className="text-gray-700">{value === "Yes" ? <span>Yes / <span className="font-telugu">అవును</span></span> : <span>No / <span className="font-telugu">కాదు</span></span>}</span>
              </label>
            ))}
          </div>
          {errors.baptizedInWater && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.baptizedInWater.message}
            </p>
          )}
        </div>

        {/* Music Ministry */}
        <div>
          <p className="block text-sm font-semibold text-gray-700 mb-2">
            Music Ministry / <span className="font-telugu">మీకు సంగీత పరిచర్య అనుభవం ఉందా?</span> <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-6">
            {RADIO_OPTIONS.map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("musicMinistry")}
                  className="h-4 w-4 border-gray-300 text-brand-purple focus:ring-brand-purple"
                />
                <span className="text-gray-700">{value === "Yes" ? <span>Yes / <span className="font-telugu">అవును</span></span> : <span>No / <span className="font-telugu">కాదు</span></span>}</span>
              </label>
            ))}
          </div>
          {errors.musicMinistry && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.musicMinistry.message}
            </p>
          )}
        </div>

        {/* Education */}
        <div>
          <label
            htmlFor="education"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Education / <span className="font-telugu">విద్యార్హతలు</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="education"
            type="text"
            {...register("education")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.education ? "border-red-500" : "border-gray-200"
            )}
            placeholder="e.g. High School, Bachelor of Arts"
          />
          {errors.education && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.education.message}
            </p>
          )}
        </div>

        {/* Job */}
        <div>
          <label
            htmlFor="job"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Job / <span className="font-telugu">ఉద్యోగం</span> <span className="text-red-500">*</span>
          </label>
          <input
            id="job"
            type="text"
            {...register("job")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors",
              errors.job ? "border-red-500" : "border-gray-200"
            )}
            placeholder="Current occupation or job title"
          />
          {errors.job && (
            <p className="mt-1.5 text-sm text-red-500">{errors.job.message}</p>
          )}
        </div>

        {/* Passion for the Lord */}
        <div>
          <label
            htmlFor="passionForTheLord"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Passion for the Lord / <span className="font-telugu">దేవుని పట్ల మీకున్న ఆసక్తి లేదా భారం గురించి వివరించండి</span> <span className="text-red-500">*</span>
          </label>
          <textarea
            id="passionForTheLord"
            rows={4}
            {...register("passionForTheLord")}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors resize-y min-h-[100px]",
              errors.passionForTheLord ? "border-red-500" : "border-gray-200"
            )}
            placeholder="Share your heart and passion for the Lord (minimum 20 characters)"
          />
          {errors.passionForTheLord && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.passionForTheLord.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-brand-gold px-6 py-4 font-semibold text-brand-purple-dark shadow-md hover:bg-brand-gold-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isSubmitting ? <span>Submitting / <span className="font-telugu">సమర్పిస్తున్నాము...</span></span> : <span>Submit Admission / <span className="font-telugu">సమర్పించండి</span></span>}
        </button>
      </div>
    </form>
  );
}
