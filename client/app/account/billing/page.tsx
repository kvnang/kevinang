import { formatDate } from "@/lib/helpers";
import {
  getCustomer,
  getProductName,
  listSubscriptions,
  retrieveProduct,
} from "@/lib/stripe";
import { createClient } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";
import { ProductLine } from "./ProductLine";
import { Subscription } from "./Subscription";

export default async function BillingPage() {
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

  const subscriptions = await listSubscriptions({ customer: customer.id });

  const data = subscriptions.data;
  console.log(data);

  return (
    <main>
      <section>
        {/* <h1 className="h4 mb-4">Billing</h1> */}
        <div className="w-full">
          <div className="border-2 border-bg-tint-1 rounded-lg">
            {data.map((subscription) => {
              return (
                // @ts-expect-error
                <Subscription
                  key={subscription.id}
                  subscription={subscription}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
