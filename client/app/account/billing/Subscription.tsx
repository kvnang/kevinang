import { formatDate } from "@/lib/helpers";
import { getProductName } from "@/lib/stripe";
import Stripe from "stripe";
import { ProductLine } from "./ProductLine";

export async function Subscription({
  subscription,
}: {
  subscription: Stripe.Subscription;
}) {
  const productTitles = await Promise.all(
    subscription.items.data.map(async (item) => {
      const product = item.price.product;
      return getProductName(product);
    })
  );

  const { current_period_start, current_period_end } = subscription;

  const title = productTitles[0];

  return (
    <div className="border-b-2 border-bg-tint-1 last:border-0 p-8">
      <div className="mb-4 flex items-center">
        <h4>
          {title}{" "}
          {productTitles.length > 1 ? (
            <span className="font-normal text-base">
              and {productTitles.length - 1} more ...
            </span>
          ) : (
            ""
          )}
        </h4>
        <span className="ml-4 shrink-0 py-1 px-2 bg-bg-tint-1 rounded-full uppercase font-mono text-xs inline-block">
          {subscription.status}
        </span>
      </div>
      <div className="mb-6">
        <h5 className="text-xs uppercase font-medium text-body-0 mb-1">
          Cycle:
        </h5>
        <p>
          {formatDate(current_period_start * 1000)} –{" "}
          {formatDate(current_period_end * 1000)}
        </p>
      </div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-bg-tint-0 text-xs uppercase font-medium text-body-0">
              <tr>
                <th scope="col" className="px-5 py-3">
                  Name
                </th>
                <th scope="col" className="px-5 py-3 text-right">
                  Qty
                </th>
                <th scope="col" className="px-5 py-3 text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {subscription.items.data.map((item) => {
                return (
                  <tr key={item.id}>
                    {/* @ts-expect-error */}
                    <ProductLine subscription={item} />
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              {/* <tr>
                <td className="px-5 py-3 text-right" colSpan={3}>
                  Subtotal
                </td>
                <td className="px-5 py-3 text-right">
                </td>
              </tr> */}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
