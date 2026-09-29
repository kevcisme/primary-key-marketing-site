"use client";
import { useState } from "react";
import { StepPills } from "@/components/pk/step-pills";

const AGENDA = [
  { label: "Intros", meta: "week 1" },
  { label: "Process", meta: "week 2" },
  { label: "Assets", meta: "week 3" },
  { label: "Next", meta: "week 4" },
];

export function StepPillsDemo() {
  const [active, setActive] = useState(1);
  return <StepPills items={AGENDA} active={active} onSelect={setActive} />;
}
