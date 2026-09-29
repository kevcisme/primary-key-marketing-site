import { cn } from "@/lib/utils";

type NightProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "footer";
};

/**
 * A navy band. It scopes data-theme="dark", so every token inside re-themes;
 * when the whole page is already navy it drops to the deeper ground-alt.
 */
export function Night({ as: Tag = "section", className, children, ...rest }: NightProps) {
  return (
    <Tag
      data-theme="dark"
      className={cn("bg-ground text-ink in-data-[theme=dark]:bg-ground-alt", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
