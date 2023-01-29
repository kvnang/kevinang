import { formatCurrency } from "@/lib/helpers";
import { retrieveProduct } from "@/lib/stripe";
import type Stripe from "stripe";

export async function ProductLine({
  subscription,
}: {
  subscription: Stripe.SubscriptionItem;
}) {
  const productId = subscription.price.product as string;
  const product = await retrieveProduct({ id: productId });
  // console.log(product);

  const unitAmount = subscription.price.unit_amount;
  const quantity = subscription.quantity;
  const interval = subscription.price.recurring?.interval;

  return (
    <>
      <td className="px-5 py-3">
        <span>{product.name}</span>
      </td>
      <td className="px-5 py-3 text-right">
        <span>&times; {quantity}</span>
      </td>
      <td className="px-5 py-3 text-right">
        <span>
          {quantity && unitAmount
            ? formatCurrency(quantity * unitAmount)
            : unitAmount}{" "}
          / {interval}
        </span>
      </td>
    </>
  );
}
