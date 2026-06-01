import { Check } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

/* ── Label + error wrapper ──────────────────────────────────── */
export function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-[#313647]">
        {label}
        {required && <span className="text-[#E11D48]" aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-[#94A3B8]">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-[#E11D48]">
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Text / email / tel input ───────────────────────────────── */
export function TextInput({
  id,
  value,
  onChange,
  error,
  ...rest
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric";
}) {
  return (
    <input
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className="clay-input px-4 py-3 text-[15px] min-h-[48px]"
      {...rest}
    />
  );
}

/* ── Select ─────────────────────────────────────────────────── */
export function SelectInput({
  id,
  value,
  onChange,
  error,
  options,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className="clay-input px-4 py-3 text-[15px] min-h-[48px] cursor-pointer"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

/* ── Large choice tiles (property type) ─────────────────────── */
export function ChoiceCards({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string; sub: string; icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }> }[];
}) {
  return (
    <div role="radiogroup" aria-label={name} className="grid grid-cols-3 gap-2.5">
      {options.map(({ value: v, label, sub, icon: Icon }) => {
        const selected = value === v;
        return (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={selected}
            data-selected={selected}
            onClick={() => onChange(v)}
            className="clay-choice clay-pressable relative flex flex-col items-center gap-2 p-3.5 text-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
          >
            {selected && (
              <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#16A34A] flex items-center justify-center" aria-hidden="true">
                <Check size={11} color="white" strokeWidth={3} />
              </span>
            )}
            <Icon
              size={24}
              strokeWidth={2}
              className={selected ? "text-[#15803D]" : "text-[#64748B]"}
            />
            <span className={`text-sm font-bold ${selected ? "text-[#14532D]" : "text-[#313647]"}`}>{label}</span>
            <span className={`text-[11px] leading-tight ${selected ? "text-[#3A6B4A]" : "text-[#94A3B8]"}`}>{sub}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Multi-select chips (languages) ─────────────────────────── */
export function ChipGroup({
  label,
  values,
  onToggle,
  options,
}: {
  label: string;
  values: string[];
  onToggle: (v: string) => void;
  options: string[];
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const selected = values.includes(o);
        return (
          <button
            key={o}
            type="button"
            aria-pressed={selected}
            data-selected={selected}
            onClick={() => onToggle(o)}
            className="clay-chip clay-pressable px-4 py-2 text-sm font-medium min-h-[40px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-1"
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

/* ── Yes / No segmented toggle ──────────────────────────────── */
export function YesNo({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean | null;
  onChange: (v: boolean) => void;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="grid grid-cols-2 gap-2.5">
      {[
        { v: true, t: "Yes" },
        { v: false, t: "No" },
      ].map(({ v, t }) => {
        const selected = value === v;
        return (
          <button
            key={t}
            type="button"
            role="radio"
            aria-checked={selected}
            data-selected={selected}
            onClick={() => onChange(v)}
            className="clay-chip clay-pressable !rounded-2xl px-4 py-3 text-sm font-semibold min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-1"
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

/* ── Consent checkbox ───────────────────────────────────────── */
export function Consent({
  id,
  checked,
  onChange,
  error,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <span className="relative flex-shrink-0 mt-0.5">
          <input
            id={id}
            name={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className="peer sr-only"
          />
          <span
            data-selected={checked}
            className="clay-chip w-5 h-5 !rounded-md flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-[#16A34A] peer-focus-visible:ring-offset-1"
            aria-hidden="true"
          >
            {checked && <Check size={13} color="white" strokeWidth={3} />}
          </span>
        </span>
        <span className="text-xs text-[#64748B] leading-relaxed">{children}</span>
      </label>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-[#E11D48] pl-8">
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Shared option data ─────────────────────────────────────── */
export const COLOMBO_AREAS = [
  "Colombo 1 — Fort",
  "Colombo 2 — Slave Island",
  "Colombo 3 — Kollupitiya",
  "Colombo 4 — Bambalapitiya",
  "Colombo 5 — Havelock Town",
  "Colombo 6 — Wellawatte",
  "Colombo 7 — Cinnamon Gardens",
  "Colombo 8 — Borella",
  "Colombo 9 — Dematagoda",
  "Colombo 10 — Maradana",
  "Dehiwala – Mount Lavinia",
  "Sri Jayawardenepura Kotte",
  "Nugegoda",
  "Rajagiriya",
  "Battaramulla",
  "Other (Western Province)",
  "Other (rest of Sri Lanka)",
].map((a) => ({ value: a, label: a }));
