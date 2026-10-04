"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Locale, CONTENT } from "@/data/content";

interface ContactFormProps {
  locale: Locale;
}

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  website: string; // Honeypot
}

export const ContactForm: React.FC<ContactFormProps> = ({ locale }) => {
  const dict = CONTENT[locale].contactPage.form;

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [apiErrorMessage, setApiErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = dict.validationErrors.nameRequired;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = dict.validationErrors.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = dict.validationErrors.subjectRequired;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = dict.validationErrors.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate() || submitting) {
      return;
    }

    setSubmitting(true);
    setSubmitStatus("idle");
    setApiErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          locale,
          website: formData.website, // Honeypot
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          website: "",
        });
      } else {
        setSubmitStatus("error");
        setApiErrorMessage(
          result.error || (locale === "hi" ? "संदेश प्रेषित नहीं हो सका।" : "Failed to deliver message.")
        );
      }
    } catch (err) {
      setSubmitStatus("error");
      setApiErrorMessage(dict.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="luxury-card p-6 sm:p-8 rounded-2xl relative overflow-hidden"
    >
      {/* Honeypot hidden input for anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Do not fill this field</label>
        <input
          id="website"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Success Notification Banner */}
      {submitStatus === "success" && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-start gap-3 animate-fadeIn"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-white">{dict.successTitle}</p>
            <p className="mt-1 text-emerald-300/90">{dict.successMessage}</p>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {submitStatus === "error" && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-start gap-3 animate-fadeIn"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-white">
              {locale === "hi" ? "प्रेषण विफल" : "Submission Failed"}
            </p>
            <p className="mt-1 text-rose-300/90">
              {apiErrorMessage || dict.errorMessage}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            {dict.fullName} <span className="text-brand-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={dict.fullNamePlaceholder}
            className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent ${
              errors.name ? "border-rose-500 ring-1 ring-rose-500" : "border-brand-border"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            {dict.email} <span className="text-brand-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={dict.emailPlaceholder}
            className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent ${
              errors.email ? "border-rose-500 ring-1 ring-rose-500" : "border-brand-border"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone (Optional) */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            {dict.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder={dict.phonePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-brand-navy/80 border border-brand-border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
          />
        </div>

        {/* Company (Optional) */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            {dict.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder={dict.companyPlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-brand-navy/80 border border-brand-border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
          />
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            {dict.subject} <span className="text-brand-gold">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder={dict.subjectPlaceholder}
            className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent ${
              errors.subject ? "border-rose-500 ring-1 ring-rose-500" : "border-brand-border"
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            {dict.message} <span className="text-brand-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder={dict.messagePlaceholder}
            className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent resize-y ${
              errors.message ? "border-rose-500 ring-1 ring-rose-500" : "border-brand-border"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-brand-gold via-amber-400 to-amber-500 text-brand-dark shadow-gold-glow hover:shadow-amber-500/40 hover:from-amber-400 hover:to-brand-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-98"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{dict.submittingBtn}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{dict.submitBtn}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
