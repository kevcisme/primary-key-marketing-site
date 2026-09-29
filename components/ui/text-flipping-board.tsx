"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const FLAP_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$()-+&=;:'\"%,./?°·";

const DEFAULT_ROWS = 6;
const DEFAULT_COLS = 22;

const BASE_COL_DELAY = 30;
const BASE_ROW_DELAY = 20;
const BASE_STEP_MS = 55;
const BASE_FLIP_S = 0.35;
const totalSeconds = (rows: number, cols: number) =>
  ((cols - 1) * BASE_COL_DELAY + (rows - 1) * BASE_ROW_DELAY + 8 * BASE_STEP_MS) / 1000;

type AccentColor = {
  top: string;
  bottom: string;
  text: string;
};

/** Scramble flashes, drawn from the deck palette. */
const ACCENT_COLORS: AccentColor[] = [
  { top: "bg-marigold", bottom: "bg-marigold-deep", text: "text-carbon" },
  { top: "bg-sky", bottom: "bg-[#93cbeb]", text: "text-carbon" },
  { top: "bg-teal", bottom: "bg-teal-deep", text: "text-carbon" },
  { top: "bg-cobalt", bottom: "bg-[#075d8e]", text: "text-cream" },
  { top: "bg-cream", bottom: "bg-[#e8dfcf]", text: "text-carbon" },
  { top: "bg-flag", bottom: "bg-[#d45f38]", text: "text-carbon" },
];

/** Glyphs scale with the board's width (a container), not the viewport. */
const CELL_TEXT_STYLE: React.CSSProperties = {
  fontSize: "min(28px, calc(100cqi / var(--board-cols) * 0.62))",
  lineHeight: 1,
};

// ── Individual Split-Flap Character ───────────────────────────────────

const FlapCell = React.memo(
  function FlapCell({
    target,
    delay,
    stepMs,
    flipDuration,
    instant,
  }: {
    target: string;
    delay: number;
    stepMs: number;
    flipDuration: number;
    /** Reduced motion: show the target without scrambling. */
    instant: boolean;
  }) {
    const [current, setCurrent] = useState(" ");
    const [prev, setPrev] = useState(" ");
    const [flipId, setFlipId] = useState(0);
    const [accent, setAccent] = useState<AccentColor | null>(null);
    const [prevAccent, setPrevAccent] = useState<AccentColor | null>(null);
    const curRef = useRef(" ");
    const tgtRef = useRef<string | null>(null);
    const accentRef = useRef<AccentColor | null>(null);
    const startTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const stepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      if (startTimer.current) clearTimeout(startTimer.current);
      if (stepTimer.current) clearTimeout(stepTimer.current);
      startTimer.current = null;
      stepTimer.current = null;

      const normalized = FLAP_CHARS.includes(target.toUpperCase()) ? target.toUpperCase() : " ";
      if (normalized === tgtRef.current) return;
      tgtRef.current = normalized;

      if (normalized === " " && curRef.current === " ") return;

      if (instant) {
        curRef.current = normalized;
        accentRef.current = null;
        setPrev(normalized);
        setCurrent(normalized);
        setAccent(null);
        return;
      }

      const scrambleCount =
        normalized === " " ? 8 + Math.floor(Math.random() * 8) : 25 + Math.floor(Math.random() * 15);

      const runStep = (i: number) => {
        const isLast = i === scrambleCount;
        const ch = isLast ? normalized : FLAP_CHARS[1 + Math.floor(Math.random() * (FLAP_CHARS.length - 1))];

        const newAccent = isLast
          ? null
          : Math.random() < 0.2
            ? ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)]
            : null;

        setPrev(curRef.current);
        setPrevAccent(accentRef.current);
        curRef.current = ch;
        accentRef.current = newAccent;
        setCurrent(ch);
        setAccent(newAccent);
        setFlipId((n) => n + 1);

        if (!isLast) {
          stepTimer.current = setTimeout(() => runStep(i + 1), stepMs);
        }
      };

      startTimer.current = setTimeout(() => runStep(1), delay);

      return () => {
        if (startTimer.current) clearTimeout(startTimer.current);
        if (stepTimer.current) clearTimeout(stepTimer.current);
        startTimer.current = null;
        stepTimer.current = null;
        tgtRef.current = null;
      };
    }, [target, delay, stepMs, instant]);

    const show = current === " " ? "\u00A0" : current;
    const showPrev = prev === " " ? "\u00A0" : prev;

    const textCx =
      "absolute inset-x-0 flex select-none items-center justify-center font-mono font-semibold tracking-wide";
    const topBg = accent?.top ?? "bg-[#1b2e4d]";
    const bottomBg = accent?.bottom ?? "bg-[#172946]";
    const textColor = accent?.text ?? "text-cream";

    const flapTopBg = prevAccent?.top ?? "bg-[#22385b]";
    const flapTextColor = prevAccent?.text ?? "text-cream";

    const bottomDelay = flipDuration * 0.5;

    return (
      <div className="flex aspect-3/6 flex-col overflow-hidden rounded-[2px] border border-[#07101f] md:rounded-[3px] md:border-2">
        {/* Flap content area */}
        <div className="relative flex-1 perspective-dramatic transform-3d">
          <div className="absolute inset-0 z-40 hidden flex-row items-center justify-center md:flex">
            <div className="h-1/2 w-px rounded-br-sm rounded-tr-sm bg-[#07101f]" />
            <div className="flex h-px flex-1 bg-[#07101f]" />
            <div className="h-1/2 w-px rounded-bl-sm rounded-tl-sm bg-[#07101f]" />
          </div>

          {/* Static top – new character top half */}
          <div className={cn("absolute inset-x-0 top-0 h-[calc(50%-0.5px)] overflow-hidden rounded-t-[3px]", topBg)}>
            <div className={cn(textCx, textColor, "top-0 h-[200%]")} style={CELL_TEXT_STYLE}>
              {show}
            </div>
          </div>

          {/* Static bottom – new character bottom half */}
          <div className={cn("absolute inset-x-0 bottom-0 h-[calc(50%-0.5px)] overflow-hidden rounded-b-[3px]", bottomBg)}>
            <div className={cn(textCx, textColor, "bottom-0 h-[200%]")} style={CELL_TEXT_STYLE}>
              {show}
            </div>
            {flipId > 0 && (
              <motion.div
                key={`s${flipId}`}
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_60%)]"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0 }}
                transition={{ duration: flipDuration * 1.3, ease: "easeOut" }}
              />
            )}
          </div>

          {/* Flipping top flap – old character top half, drops down */}
          {flipId > 0 && (
            <motion.div
              key={flipId}
              className={cn(
                "absolute inset-x-0 top-0 z-10 h-[calc(50%-0.5px)] origin-bottom overflow-hidden rounded-t-[3px] backface-hidden transform-3d",
                flapTopBg
              )}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -100 }}
              transition={{ duration: flipDuration, ease: [0.55, 0.055, 0.675, 0.19] }}
            >
              <div className={cn(textCx, flapTextColor, "top-0 h-[200%]")} style={CELL_TEXT_STYLE}>
                {showPrev}
              </div>
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1))]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: flipDuration }}
              />
            </motion.div>
          )}

          {/* Flipping bottom flap – new character bottom half, rises up */}
          {flipId > 0 && (
            <motion.div
              key={`b${flipId}`}
              className={cn(
                "absolute inset-x-0 bottom-0 z-10 h-[calc(50%-0.5px)] origin-top overflow-hidden rounded-b-[3px] backface-hidden transform-3d",
                bottomBg
              )}
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: flipDuration * 0.85, delay: bottomDelay, ease: [0.33, 1.55, 0.64, 1] }}
            >
              <div className={cn(textCx, textColor, "bottom-0 h-[200%]")} style={CELL_TEXT_STYLE}>
                {show}
              </div>
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.6))]"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 0 }}
                transition={{ duration: flipDuration * 0.85, delay: bottomDelay }}
              />
            </motion.div>
          )}

          {/* Split line */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px -translate-y-[0.5px] bg-black/50" />
        </div>

        {/* Bottom stripes – decorative, outside the flap area */}
        <div className="h-2 w-full bg-[repeating-linear-gradient(to_bottom,currentColor_0,currentColor_1px,transparent_1px,transparent_0.15rem)] mask-t-from-50% text-black md:h-4 md:bg-[repeating-linear-gradient(to_bottom,currentColor_0,currentColor_1px,transparent_1px,transparent_0.2rem)]" />
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.target === nextProps.target &&
    prevProps.delay === nextProps.delay &&
    prevProps.stepMs === nextProps.stepMs &&
    prevProps.flipDuration === nextProps.flipDuration &&
    prevProps.instant === nextProps.instant
);

// ── Color Tile ────────────────────────────────────────────────────────

/** `{Y}` marigold, `{S}` sky, `{T}` teal, `{B}` cobalt, `{C}` cream, `{R}` flag. */
const COLOR_MAP: Record<string, string> = {
  "{Y}": "#FFC93D",
  "{S}": "#A3D5F2",
  "{T}": "#42A8C5",
  "{B}": "#0869A0",
  "{C}": "#F2EADC",
  "{R}": "#E26A42",
};

const ColorCell = React.memo(function ColorCell({ color }: { color: string }) {
  return (
    <div
      className="aspect-3/6 rounded-[2px] border border-[#07101f] md:rounded-[3px] md:border-2"
      style={{ backgroundColor: color }}
    />
  );
});

// ── Row Parser ────────────────────────────────────────────────────────

type ParsedCell = { type: "char"; value: string } | { type: "color"; hex: string };

function parseRow(row: string): ParsedCell[] {
  const cells: ParsedCell[] = [];
  let i = 0;
  while (i < row.length) {
    if (row[i] === "{" && i + 2 < row.length && row[i + 2] === "}") {
      const code = row.substring(i, i + 3);
      if (COLOR_MAP[code]) {
        cells.push({ type: "color", hex: COLOR_MAP[code] });
        i += 3;
        continue;
      }
    }
    cells.push({ type: "char", value: row[i] });
    i++;
  }
  return cells;
}

// ── Word Wrap ─────────────────────────────────────────────────────────

function wrapParagraph(paragraph: string, maxCols: number): string[] {
  const lines: string[] = [];
  const words = paragraph.split(/[ \t]+/).filter(Boolean);
  let currentLine = "";

  for (const word of words) {
    if (word.length > maxCols) {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = "";
      }
      lines.push(word.slice(0, maxCols));
      continue;
    }

    if (!currentLine) {
      currentLine = word;
    } else if (currentLine.length + 1 + word.length <= maxCols) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}

function wrapText(input: string, maxCols: number): string[] {
  return input
    .split("\n")
    .flatMap((paragraph) => (paragraph.trim() === "" ? [""] : wrapParagraph(paragraph, maxCols)));
}

// ── Main TextFlippingBoard Component ──────────────────────────────────

export interface TextFlippingBoardProps {
  /** Raw rows, left-aligned. Supports color codes such as `{Y}`. */
  rows?: string[];
  /** Wrapped and centered text. Supports `\n`. */
  text?: string;
  /** Board size in cells. */
  boardRows?: number;
  boardCols?: number;
  /** Screen-reader text for the board (the cells are hidden). Defaults to `text`. */
  label?: string;
  className?: string;
  /** Total animation duration in seconds. Defaults to ~1.2s for a 6×22 board. */
  duration?: number;
}

/** A Solari-style split-flap board: navy housing, cream glyphs, palette-colored scramble. */
export function TextFlippingBoard({
  rows,
  text,
  boardRows = DEFAULT_ROWS,
  boardCols = DEFAULT_COLS,
  label,
  className,
  duration,
}: TextFlippingBoardProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const base = totalSeconds(boardRows, boardCols);
  const scale = (duration ?? base) / base;
  const colDelay = BASE_COL_DELAY * scale;
  const rowDelay = BASE_ROW_DELAY * scale;
  const stepMs = BASE_STEP_MS * scale;
  const flipDur = Math.min(0.6, Math.max(0.15, BASE_FLIP_S * scale));

  const board = useMemo(() => {
    const grid: ParsedCell[][] = Array.from({ length: boardRows }, () =>
      Array.from({ length: boardCols }, () => ({ type: "char" as const, value: " " }))
    );

    if (text) {
      const lines = wrapText(text, boardCols).slice(0, boardRows);
      const startRow = Math.max(0, Math.floor((boardRows - lines.length) / 2));
      lines.forEach((line, i) => {
        const row = startRow + i;
        if (row >= boardRows) return;
        const parsed = parseRow(line);
        const startCol = Math.max(0, Math.floor((boardCols - parsed.length) / 2));
        parsed.forEach((cell, c) => {
          if (startCol + c < boardCols) grid[row][startCol + c] = cell;
        });
      });
    } else if (rows) {
      rows.forEach((row, r) => {
        if (r >= boardRows) return;
        parseRow(row).forEach((cell, c) => {
          if (c < boardCols) grid[r][c] = cell;
        });
      });
    }

    return grid;
  }, [rows, text, boardRows, boardCols]);

  return (
    <div
      className={cn(
        "@container relative mx-auto w-full max-w-3xl rounded-lg border-2 border-frame bg-[#0b172b] p-1.5 shadow-hard md:rounded-xl md:p-3",
        className
      )}
      style={{ "--board-cols": boardCols } as React.CSSProperties}
    >
      {(label ?? text) && <span className="sr-only">{label ?? text}</span>}
      <div
        className="grid gap-px md:gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${boardCols}, 1fr)` }}
        aria-hidden
      >
        {board.map((row, r) =>
          row.map((cell, c) =>
            cell.type === "color" ? (
              <ColorCell key={`${r}-${c}`} color={cell.hex} />
            ) : (
              <FlapCell
                key={`${r}-${c}`}
                target={cell.value}
                delay={c * colDelay + r * rowDelay}
                stepMs={stepMs}
                flipDuration={flipDur}
                instant={reduceMotion}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
