import { formatCurrency, formatDate } from "@/lib/helpers";
import { listInvoices, getCustomer } from "@/lib/stripe";
import { createClient } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import { InvoiceMore } from "./InvoiceMore";

export default async function InvoicesPage() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect("/");
  }

  const { email } = session.user;

  if (!email) {
    return redirect("/");
  }

  const customer = await getCustomer({ email });

  if (!customer) {
    return <main>Nothing here.</main>;
  }

  const invoices = await listInvoices({ customer: customer.id });

  const data = invoices.data;

  return (
    <main>
      <section>
        <h1 className="h4 mb-4">Invoices</h1>
        <div className="w-full">
          <div className="border-2 border-bg-tint-1 rounded-lg">
            {data.map((invoice) => (
              <div
                key={invoice.number}
                className="flex items-center justify-between py-4 px-6 border-b-2 border-bg-tint-1 last:border-0"
              >
                <div className="overflow-hidden">
                  <div className="mb-1 flex items-center">
                    <span className="font-medium">
                      {/* Invoice #{invoice.number} */}
                      {formatDate(invoice.created * 1000)}
                    </span>
                    <span className="inline-block uppercase bg-bg-tint-1 px-2 py-1 text-xs font-mono rounded-full ml-4">
                      {invoice.status}
                    </span>
                  </div>
                  {/* <div className="text-sm text-body-0">
                    <span>{formatDate(invoice.created * 1000)}</span>
                  </div> */}
                  <div className="text-sm text-body-0">
                    <span className="truncate block">
                      {invoice.lines?.data
                        ?.map((line) => line.description)
                        .join(", ")}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-bold">
                      {formatCurrency(invoice.total)}
                    </span>
                    <div className="shrink-0 ml-4">
                      <InvoiceMore invoice={invoice} />
                    </div>
                  </div>

                  {/* {invoice.invoice_pdf} */}
                  {/* {invoice.hosted_invoice_url} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
