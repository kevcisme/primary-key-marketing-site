/** WCAG 2 relative luminance of a `#rrggbb` color. */
export function luminance(hex: string): number {
  const channels = hex
    .replace("#", "")
    .match(/../g)!
    .map((c) => parseInt(c, 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/** WCAG 2 contrast ratio between two `#rrggbb` colors (1 to 21). */
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** The WCAG level a ratio earns for body text, or "large only" / "fail". */
export function grade(ratio: number): "AAA" | "AA" | "large only" | "fail" {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "large only";
  return "fail";
}
