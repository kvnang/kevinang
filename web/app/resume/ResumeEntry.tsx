export function ResumeEntry({
  title,
  subtitle,
  year,
  variant = "default",
  children,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  year?: React.ReactNode;
  variant?: "default" | "current";
  children?: React.ReactNode;
}) {
  return (
    <div className="grid items-center gap-2">
      <div className="flex flex-wrap justify-between">
        <div className="prose">
          <h4 className="mb-0">
            {title}
            {variant === "current" ? (
              <div
                className="inline-block w-2 h-2 ml-2 align-middle rounded-full bg-green-500 animate-pulse"
                aria-label="Current"
              />
            ) : null}
          </h4>
          {subtitle ? (
            <h5 className="mb-0 text-muted-foreground">{subtitle}</h5>
          ) : null}
        </div>
        {year ? (
          <div>
            <span className="font-mono text-sm text-muted-foreground">
              {year}
            </span>
          </div>
        ) : null}
      </div>
      {children ? (
        <div>
          <div className="prose">
            <div className="text-sm text-muted-foreground">{children}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
