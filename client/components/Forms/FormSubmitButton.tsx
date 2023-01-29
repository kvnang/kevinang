import * as React from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface Props {
  loading: boolean;
  title?: string;
  icon?: React.ReactNode;
}

export function FormSubmitButton({ loading, title, icon }: Props) {
  return (
    <button
      className="relative flex justify-center items-center bg-accent text-bg px-5 py-3 rounded-md font-semibold hover:bg-accent-2 transition-colors w-full disabled:bg-bg-tint-1 disabled:pointer-events-none disabled:cursor-not-allowed"
      type="submit"
      disabled={loading}
    >
      <span className={`${loading ? "opacity-0" : ""}`}>{title || "Send"}</span>
      {icon && (
        <span
          className={`h-4 align-middle ml-2 mb-1.5 text-p ${
            loading ? "opacity-0" : ""
          }`}
        >
          {icon}
        </span>
      )}
      {loading && (
        <LoadingSpinner className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
      )}
    </button>
  );
}
