import { Night } from "./night";

type CtaBandProps = {
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Buttons. */
  actions: React.ReactNode;
  /** A mono prompt line under the buttons. */
  footnote?: React.ReactNode;
};

/** The closing call to action every page ends on: a navy band, a serif line, and the buttons. */
export function CtaBand({ title, lead, actions, footnote }: CtaBandProps) {
  return (
    <Night className="px-6 py-24 sm:px-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {lead && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{lead}</p>}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">{actions}</div>
        {footnote && <p className="mt-10 font-mono text-sm text-muted">{footnote}</p>}
      </div>
    </Night>
  );
}
