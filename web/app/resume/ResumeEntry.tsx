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
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="prose mb-4 sm:mb-0 sm:mr-4">
          <h4 className="mb-0">
            {variant === "current" ? (
              <div
                className="inline-block w-2 h-2 mr-2 align-middle rounded-full bg-green-500 animate-pulse"
                aria-label="Current"
              />
            ) : null}
            {title}
            {subtitle ? (
              <span className="inline-block font-normal text-muted-foreground">
                &nbsp;&nbsp;/&nbsp;&nbsp;{subtitle}
              </span>
            ) : null}
          </h4>
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
