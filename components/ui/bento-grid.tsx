import { cn } from "@/lib/utils";
import { OffsetCard, type CardTone } from "@/components/pk/offset-card";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-7 md:auto-rows-72 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

/** A bento cell drawn as a deck offset card: header art, then title and description. */
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  tone = "surface",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: CardTone;
}) => {
  return (
    <OffsetCard
      tone={tone}
      className={cn("row-span-1", className)}
      bodyClassName="flex h-full flex-col gap-4 p-4"
    >
      {header}
      <div className="transition-transform duration-200 group-hover/card:translate-x-1">
        {icon}
        <div className="mb-1.5 mt-1 text-lg font-semibold leading-snug">{title}</div>
        <div className="text-sm leading-relaxed opacity-85">{description}</div>
      </div>
    </OffsetCard>
  );
};
