import { cn } from "@/lib/utils";

type SpinnerSize = "sm" | "md" | "lg";

const SPINNER_SIZES: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-[3px]",
};

const INLINE_SPINNER_SIZES: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-5 w-5 border-2",
  lg: "h-6 w-6 border-2",
};

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  message?: string;
  className?: string;
  showMessage?: boolean;
}

export function LoadingSpinner({
  size = "md",
  message = "Loading…",
  className,
  showMessage = true,
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 text-center",
        className
      )}
    >
      <span
        role="status"
        aria-label="Loading"
        className={cn(
          "animate-spin rounded-full border border-muted-foreground/20 border-t-primary",
          SPINNER_SIZES[size]
        )}
      />

      {showMessage && (
        <p className="text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  );
}

interface InlineSpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

export function InlineSpinner({
  size = "sm",
  className,
}: InlineSpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block animate-spin rounded-full border border-muted-foreground/20 border-t-primary align-middle",
        INLINE_SPINNER_SIZES[size],
        className
      )}
    />
  );
}
