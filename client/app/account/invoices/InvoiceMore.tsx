"use client";

import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import type Stripe from "stripe";

export function InvoiceMore({ invoice }: { invoice: Stripe.Invoice }) {
  return (
    <>
      <Menu>
        {({ open }) => (
          <div
            className={`relative flex items-center justify-center ${
              open ? "z-10" : ""
            }`}
          >
            <Menu.Button
              className={`p-2 hover:bg-bg-tint-1 transition-colors rounded-lg ${
                open ? "bg-bg-tint-1" : ""
              }`}
            >
              <EllipsisVerticalIcon className="w-6 h-6" title="More" />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute top-6 right-0 flex flex-col bg-bg-tint-1 rounded-lg overflow-hidden py-1 z-10 shadow-md">
                {invoice.status === "open" && (
                  <Menu.Item disabled={!invoice.hosted_invoice_url}>
                    {({ active }: { active: boolean }) => (
                      <a
                        className={`px-4 py-2 whitespace-nowrap transition-colors ${
                          active && "bg-bg-tint-2"
                        }`}
                        href={invoice.hosted_invoice_url || ""}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pay Invoice
                      </a>
                    )}
                  </Menu.Item>
                )}

                <Menu.Item disabled={!invoice.invoice_pdf}>
                  {({ active }: { active: boolean }) => (
                    <a
                      className={`px-4 py-2 whitespace-nowrap transition-colors ${
                        active && "bg-bg-tint-2"
                      }`}
                      href={invoice.invoice_pdf || ""}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Invoice
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    </>
  );
}
