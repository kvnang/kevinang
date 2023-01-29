import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

export async function getCustomer({ email }: { email: string }) {
  const customers = await stripe.customers.list({
    email,
    limit: 1,
  });

  return customers.data[0];
}

export async function listInvoices({ customer }: { customer: string }) {
  const invoices = await stripe.invoices.list({
    limit: 10,
    customer,
  });

  return invoices;
}

export async function listSubscriptions({ customer }: { customer: string }) {
  const subscriptions = await stripe.subscriptions.list({
    limit: 10,
    customer,
  });

  return subscriptions;
}

export async function retrieveProduct({ id }: { id: string }) {
  const product = await stripe.products.retrieve(id);

  return product;
}

export async function getProductName(
  product: string | Stripe.Product | Stripe.DeletedProduct
) {
  if (typeof product === "string") {
    const productObject = await retrieveProduct({ id: product });
    return productObject.name;
  }

  if (product.deleted) {
    return "Deleted";
  }

  return product.name;
}
