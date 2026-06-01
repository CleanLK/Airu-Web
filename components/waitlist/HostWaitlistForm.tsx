"use client";

import { useState } from "react";
import { Home, Building2, Building, ArrowRight, Loader2 } from "lucide-react";
import { Field, TextInput, SelectInput, ChoiceCards, Consent, COLOMBO_AREAS } from "./fields";
import { validateContact, postWaitlist } from "./submit";

const PROPERTY_TYPES = [
  { value: "villa",     label: "Villa",     sub: "Holiday / coastal home", icon: Home },
  { value: "hotel",     label: "Hotel",     sub: "Boutique / guesthouse",  icon: Building2 },
  { value: "apartment", label: "Apartment", sub: "Condo / city unit",      icon: Building },
];

const PORTFOLIO = [
  { value: "1",     label: "Just 1 property" },
  { value: "2-5",   label: "2 – 5 properties" },
  { value: "6-20",  label: "6 – 20 properties" },
  { value: "20+",   label: "20+ properties" },
];

const HOST_TYPE = [
  { value: "individual", label: "Individual host" },
  { value: "management", label: "Property management company" },
];

// Size options + label adapt to the chosen property type.
function sizeConfig(type: string): { label: string; options: { value: string; label: string }[] } {
  if (type === "hotel") {
    return {
      label: "Number of rooms (keys)",
      options: ["1 – 10", "11 – 30", "31 – 75", "75+"].map((v) => ({ value: v, label: v })),
    };
  }
  return {
    label: "Bedrooms per property",
    options: ["Studio", "1", "2", "3", "4+"].map((v) => ({ value: v, label: v })),
  };
}

export default function HostWaitlistForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [size, setSize] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [city, setCity] = useState("");
  const [hostType, setHostType] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const size$ = sizeConfig(propertyType);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validateContact({ name, email, phone, consent });
    if (!propertyType) v.propertyType = "Select your property type.";
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"], [data-error="true"]');
      first?.focus();
      return;
    }
    setLoading(true);
    const res = await postWaitlist({
      role: "host",
      name, email, phone, propertyType, size, portfolio, city, hostType,
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

      <Field id="host-propertyType" label="What type of property do you manage?" required error={errors.propertyType}>
        <div data-error={errors.propertyType ? true : undefined}>
          <ChoiceCards
            name="Property type"
            value={propertyType}
            onChange={(v) => { setPropertyType(v); setSize(""); }}
            options={PROPERTY_TYPES}
          />
        </div>
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="host-name" label="Full name" required error={errors.name}>
          <TextInput id="host-name" value={name} onChange={setName} error={errors.name}
            type="text" placeholder="Your name" autoComplete="name" />
        </Field>
        <Field id="host-phone" label="Mobile number" required error={errors.phone}>
          <TextInput id="host-phone" value={phone} onChange={setPhone} error={errors.phone}
            type="tel" inputMode="tel" placeholder="077 123 4567" autoComplete="tel" />
        </Field>
      </div>

      <Field id="host-email" label="Email address" required error={errors.email}>
        <TextInput id="host-email" value={email} onChange={setEmail} error={errors.email}
          type="email" inputMode="email" placeholder="you@example.com" autoComplete="email" />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="host-portfolio" label="How many properties?" hint="Helps us plan launch capacity.">
          <SelectInput id="host-portfolio" value={portfolio} onChange={setPortfolio}
            options={PORTFOLIO} placeholder="Select…" />
        </Field>
        <Field id="host-size" label={size$.label}>
          <SelectInput id="host-size" value={size} onChange={setSize}
            options={size$.options} placeholder="Select…" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="host-city" label="Property location">
          <SelectInput id="host-city" value={city} onChange={setCity}
            options={COLOMBO_AREAS} placeholder="Select area…" />
        </Field>
        <Field id="host-hostType" label="You are a…">
          <SelectInput id="host-hostType" value={hostType} onChange={setHostType}
            options={HOST_TYPE} placeholder="Select…" />
        </Field>
      </div>

      <Consent id="host-consent" checked={consent} onChange={setConsent} error={errors.consent}>
        I agree to be contacted about Airu&apos;s launch and accept the{" "}
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
          <>Join the host waitlist <ArrowRight size={16} aria-hidden="true" /></>
        )}
      </button>
    </form>
  );
}
