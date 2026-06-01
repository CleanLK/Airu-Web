"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Field, TextInput, SelectInput, ChipGroup, YesNo, Consent, COLOMBO_AREAS } from "./fields";
import { validateContact, postWaitlist } from "./submit";

const EXPERIENCE = [
  { value: "none",  label: "New to cleaning work" },
  { value: "<1",    label: "Under 1 year" },
  { value: "1-3",   label: "1 – 3 years" },
  { value: "3+",    label: "3+ years" },
];

const LANGUAGES = ["Sinhala", "Tamil", "English"];

export default function CleanerWaitlistForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [transport, setTransport] = useState<boolean | null>(null);
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function toggleLang(l: string) {
    setLanguages((cur) => (cur.includes(l) ? cur.filter((x) => x !== l) : [...cur, l]));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validateContact({ name, email, phone, consent });
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }
    setLoading(true);
    const res = await postWaitlist({
      role: "cleaner",
      name, email, phone, nic, city, experience, languages,
      transport: transport === true,
      consent,
      company: "", // honeypot
    });
    setLoading(false);
    if (res.ok) onSuccess();
    else setErrors(res.errors ?? {});
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {errors._form && (
        <p role="alert" className="clay-card-rose text-sm font-medium text-[#9F1239] px-4 py-3 !rounded-2xl">
          {errors._form}
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="cl-name" label="Full name (as per NIC)" required error={errors.name}>
          <TextInput id="cl-name" value={name} onChange={setName} error={errors.name}
            type="text" placeholder="Your full name" autoComplete="name" />
        </Field>
        <Field id="cl-phone" label="Mobile number" required error={errors.phone}>
          <TextInput id="cl-phone" value={phone} onChange={setPhone} error={errors.phone}
            type="tel" inputMode="tel" placeholder="077 123 4567" autoComplete="tel" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="cl-email" label="Email address" required error={errors.email}>
          <TextInput id="cl-email" value={email} onChange={setEmail} error={errors.email}
            type="email" inputMode="email" placeholder="you@example.com" autoComplete="email" />
        </Field>
        <Field id="cl-nic" label="NIC number" hint="Old (12345678V) or new 12-digit format.">
          <TextInput id="cl-nic" value={nic} onChange={setNic}
            type="text" placeholder="Optional for now" autoComplete="off" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="cl-city" label="Where are you based?">
          <SelectInput id="cl-city" value={city} onChange={setCity}
            options={COLOMBO_AREAS} placeholder="Select area…" />
        </Field>
        <Field id="cl-experience" label="Cleaning experience">
          <SelectInput id="cl-experience" value={experience} onChange={setExperience}
            options={EXPERIENCE} placeholder="Select…" />
        </Field>
      </div>

      <Field id="cl-languages" label="Languages you speak" hint="Helps us match you with the right hosts.">
        <ChipGroup label="Languages spoken" values={languages} onToggle={toggleLang} options={LANGUAGES} />
      </Field>

      <Field id="cl-transport" label="Do you have your own transport?">
        <YesNo label="Own transport" value={transport} onChange={setTransport} />
      </Field>

      <Consent id="cl-consent" checked={consent} onChange={setConsent} error={errors.consent}>
        I agree to be contacted about joining Airu and accept the{" "}
        <a href="#" className="text-[#16A34A] font-medium underline underline-offset-2">Privacy Policy (PDPA)</a>.
      </Consent>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary inline-flex items-center justify-center gap-2.5 min-h-[52px] text-white font-semibold text-[15px] px-8 rounded-2xl cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
      >
        {loading ? (
          <><Loader2 size={17} className="animate-spin" aria-hidden="true" /> Joining…</>
        ) : (
          <>Join the cleaner waitlist <ArrowRight size={16} aria-hidden="true" /></>
        )}
      </button>
    </form>
  );
}
