"use client";

import { FormSubmitButton } from "../Forms";

export function CustomerPortal() {
  const handleManageBilling = async () => {
    const session = await fetch("/api/customer-portal").then((res) =>
      res.json()
    );
    const { url } = session;
    if (url) {
      window.location.href = url;
    }
  };
  return (
    <div className="border-2 border-bg-tint-1  p-8 rounded-lg">
      <div className="max-w-prose mb-6">
        <h2 className="h4 mb-4">Manage Billing</h2>
        <p>
          Review and update your plans, or manage your payment methods — all in
          one place.
        </p>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleManageBilling}
          className="relative flex justify-center items-center bg-accent text-bg px-5 py-3 rounded-md font-semibold hover:bg-accent-2 transition-colors disabled:bg-bg-tint-1 disabled:pointer-events-none disabled:cursor-not-allowed"
        >
          Access Portal
        </button>
      </div>
    </div>
  );
}
