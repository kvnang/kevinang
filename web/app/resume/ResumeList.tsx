import { cn } from "@/lib/utils";

export function ResumeList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <div>
      <ul className={cn("flex flex-wrap -m-1", className)} {...props} />
    </div>
  );
}

export function ResumeListItem({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <li className="m-1 inline-flex items-center rounded-md px-2 py-1 border border-border">
      {title}
      {subtitle ? (
        <span className="text-muted-foreground inline-block ml-1 text-xs">
          / {subtitle}
        </span>
      ) : null}
    </li>
  );
}
