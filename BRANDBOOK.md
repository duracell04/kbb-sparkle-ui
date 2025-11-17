# KBB — Brandbook (MVP)

> **Positioning:** KBB (Kartvelian Business Bonds) makes **cash‑settled via regulated rails, token‑registered** private debt simple, auditable, and eligible for professional investors.
> **Business copy may say:** *bank‑settled, token‑registered private credit.*
> **Tech copy stays neutral:** *cash‑settled via regulated rails, token‑registered.*

---

## 1) Brand Overview (1 paragraph)

KBB is a calm, precise layer that turns SME credit into standardized, auditable notes. Cash always settles on **regulated rails**; the token is the **register & distribution** layer. We don't sell hype or retail dreams—we ship professional, well‑documented infrastructure that regulators, transfer agents, and allocators can trust.

**Core adjectives:** **precise, calm, modern** (add: credible, pragmatic)
**Personality sentence:** *Feels like a calm senior analyst—measured, exact, never noisy.*

---

## 2) Color Palette (Tailwind‑ready)

> **Goal:** finance‑grade clarity with high contrast. Use **Primary** for actions and highlights; **Secondary** sparingly for accents and charts. **Neutrals** carry most UI surfaces.

### Primary

* **Indigo 600** `#4F46E5` → `bg-indigo-600 text-white` (default action)
* **Hover:** Indigo 700 `#4338CA` → `hover:bg-indigo-700`
* **Focus ring:** Indigo 500 `#6366F1` → `focus:ring-indigo-500`

### Secondary / Accent

* **Teal 500** `#14B8A6` → `text-teal-500` / `bg-teal-500` (sparingly: KPIs/links/charts)
* **Hover:** Teal 600 `#0D9488`

### Neutrals (UI scaffold)

* **Background:** Slate 50 `#F8FAFC` → `bg-slate-50`
* **Surface:** White `#FFFFFF` → `bg-white`
* **Text Primary:** Slate 900 `#0F172A` → `text-slate-900`
* **Text Secondary:** Slate 600 `#475569` → `text-slate-600`
* **Borders/Dividers:** Slate 200 `#E2E8F0` → `border-slate-200`

### Status

* **Success:** Emerald 600 `#16A34A`
* **Warning:** Amber 600 `#D97706`
* **Error (Destructive):** Rose 600 `#E11D48`
* **Info:** Sky 600 `#0284C7`

**Accessibility:** Target WCAG **AA**. Pair `indigo-600` on white or slate surfaces; avoid teal on slate‑600 body text. Use `text-slate-900` for long copy.

---

## 3) Typography & Spacing

**Primary font:** **Inter** (system fallback: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial`)
**Optional mono (IDs/IBANs):** JetBrains Mono (or `ui-monospace, SFMono-Regular, Menlo, monospace`)

**Sizing & usage**

* **text-xs (12px), text-sm (14px)** → meta, captions, legal lines
* **text-base (16px)** → body default
* **text-lg (18px), text-xl (20px)** → section heads
* **text-2xl/3xl (24–30px)** → page titles (sparse)

**Line height:** comfortable (body `leading-7`, headings `leading-tight`)
**Numerics:** enable **tabular‑nums** for tables/amounts.
**Spacing grid:** 8‑point (4/8/12/16/24/32).
**Max line length:** ~70–85 chars. Avoid walls of text.

---

## 4) UI Primitives

### Buttons

* **Primary:** `bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 rounded-lg px-4 h-10`
* **Secondary:** `bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg px-4 h-10`
* **Ghost:** `text-slate-700 hover:bg-slate-100 rounded-lg px-3 h-10`
* **Destructive:** `bg-rose-600 text-white hover:bg-rose-700`

States: `aria-busy`, disabled opacity `opacity-60`, show spinner left for async.

### Cards

* **Container:** `bg-white rounded-xl border border-slate-200 shadow-sm p-6`
* **Header:** title `text-lg font-medium`, subtext `text-slate-600 text-sm`
* **Density:** keep ≥16px padding; never cram.

### Inputs

* **Field:** `h-10 w-full rounded-lg border border-slate-300 px-3 text-slate-900 placeholder-slate-400`
* **Focus:** `outline-none ring-2 ring-indigo-500 ring-offset-1`
* **Error:** border `rose-400`, help text `text-rose-600 text-sm mt-1`
* **Min touch target:** 44px

### Badges

* **Neutral:** `bg-slate-100 text-slate-700 rounded-md px-2 py-0.5 text-xs`
* **Success/Warning/Error:** use status colors above; keep text legible (AA).

---

## 5) Voice & Microcopy

**Formality:** *plain business English* with **legal sensibility** and **developer clarity**.
**Tone:** measured, specific, never sales‑y.

**Patterns**

* Use **verbs for actions**: "**Review changes**", "**Settle order**", "**Generate extract**".
* Keep labels **≤ 2–3 words**.
* Prefer **specific nouns**: "**Coupon run**", "**Reconciliation report**", "**Settlement evidence**".

**Phrases to use (tech‑side):**

* "cash‑settled via regulated rails, token‑registered"
* "DvP only; issuance on verified settlement evidence"
* "professional‑only; whitelisted transfers"

**Phrases to avoid (tech‑side):**

* "bankless", "censorship‑resistant", "instant liquidity", "retail‑ready"

**Business‑side may use:** "bank‑settled, token‑registered private credit".

---

## 6) Do / Don't

| Do                                                              | Don't                       |
| --------------------------------------------------------------- | --------------------------- |
| "Settle order"                                                  | "Execute magic"             |
| "Upload settlement advice (ISO 20022 / SWIFT)"                  | "Drop your file here"       |
| "Whitelisted OTC transfers only"                                | "Free trading for everyone" |
| "Coupon run completed — 142 recipients, T+1 wires in progress." | "Payouts sent 🚀🚀"         |
| "Generate registrar extract (PDF)"                              | "Download stuff"            |

---

## 7) Example Strings (ready to paste)

**Section titles**

* "Reconciliation" / "Settlement Evidence" / "Registrar Extracts" / "Coupon Runs"

**CTA buttons**

* "Review changes" · "Settle order" · "Attach evidence" · "Generate extract"

**Empty state**

* "No settlement evidence uploaded yet. Attach ISO 20022 camt.054 or permitted stablecoin proof."

**Inline help**

* "KBB is **cash‑settled via regulated rails**. Tokens function as the **register & distribution** layer for professional investors."

**Alert (warning)**

* "Deadline approaching: order ORD‑1287 must settle within 2h to remain valid."

**Alert (error)**

* "Evidence mismatch: amount/currency do not reconcile to order ORD‑1287. Review and re‑attach."

---

## 8) Tailwind Token Mapping (snippet)

```js
// tailwind.config.js (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // indigo-600
          50:'#EEF2FF',100:'#E0E7FF',200:'#C7D2FE',300:'#A5B4FC',
          400:'#818CF8',500:'#6366F1',600:'#4F46E5',700:'#4338CA',
          800:'#3730A3',900:'#312E81'
        },
        secondary: {
          DEFAULT: '#14B8A6', // teal-500
          600:'#0D9488'
        }
      }
    }
  }
}
```

---

## 9) Quick Reference (1‑page sheet)

* **Adjectives:** precise · calm · modern
* **Personality:** calm senior analyst, never hype
* **Primary:** indigo‑600 `#4F46E5` (actions)
* **Accent:** teal‑500 `#14B8A6` (sparingly)
* **Neutrals:** slate‑50 bg, slate‑900 text, slate‑200 borders
* **Status:** success emerald‑600 · warning amber‑600 · error rose‑600
* **Type:** Inter; tabular‑nums for amounts; 8‑pt spacing
* **Buttons:** primary/secondary/ghost; rounded‑lg; ring‑2 focus
* **Cards:** white, rounded‑xl, border slate‑200, shadow‑sm, p‑6
* **Inputs:** h‑10, rounded‑lg, ring‑2 on focus, helpful error text
* **Voice:** plain business English; verbs for actions; labels ≤3 words
* **Avoid:** retail promises, hype, "bankless" claims

---

### Next steps

* Drop this into `BRANDBOOK.md`.
* Add `assets/brand/` with color swatches and a preview PNG.
* If helpful, I can produce a **starter Figma file** and a **Tailwind "components.tsx"** with these primitives (Button/Card/Input/Badge) wired to the tokens.
