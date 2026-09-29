import type { Axis, Vector } from "@/lib/maturity";

/** Display and numbering order on /lab (01..06). Differs from the scoring order in `AXES`. */
export const AXIS_ORDER: readonly Axis[] = [
  "data",
  "governance",
  "tooling",
  "workflow",
  "people",
  "leadership",
];

export const AXIS_COPY: Record<Axis, { name: string; description: string }> = {
  data: {
    name: "Data readiness",
    description:
      "Is the firm's data digital, structured, centralized, queryable? This is the substrate. Everything AI does, it does to data — and most firms have theirs in five systems and a shared drive. A foundation axis: nothing above it can score higher.",
  },
  governance: {
    name: "Governance & risk",
    description:
      "Policy, confidentiality, PII handling, professional liability, oversight. The second foundation axis — and in a professional-services firm, usually the one that caps the score.",
  },
  tooling: {
    name: "Tooling adoption",
    description:
      "None, generic, embedded, or custom. Scored twice — what leadership says is in use, and what is actually in use.",
  },
  workflow: {
    name: "Workflow integration",
    description:
      "Whether AI is one person's private habit or a documented step in how the work gets done.",
  },
  people: {
    name: "People & skills",
    description:
      "Literacy, champions, training, comfort. Who can actually run the thing after we leave.",
  },
  leadership: {
    name: "Leadership & strategy",
    description:
      "Whether a partner owns this, has a budget for it, and can say what AI is for at this firm. Without an owner, nothing on the roadmap survives busy season.",
  },
};

/** One illustrative firm: a decent shape held down by governance. */
export const SAMPLE_FIRM: Vector = [3, 2, 2, 3, 1, 2];
