// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCustomer, createCustomerPortalSession } from "@/lib/stripe";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const supabaseServerClient = createServerSupabaseClient<Database>({
    req,
    res,
  });

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  const email = user?.email;

  if (!email) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  const customer = await getCustomer({ email });

  if (!customer) {
    res.status(404).json({ error: "Customer not found" });
    return;
  }

  const session = await createCustomerPortalSession({
    customer: customer.id,
    return_url: "http://localhost:3000",
  });

  res.status(200).json(session);
}
