export function Service() {
  return (
    <div className="border-2 rounded-xl border-bg-tint-1 p-8">
      {/* Header */}
      <div className="flex justify-between pb-6 border-b-2 border-bg-tint-1">
        <div>
          <h2 className="h4 mb-4">WordPress Hosting</h2>
          <div className="max-w-prose">
            <p>
              Your WordPress hosting is provided by Kinsta{" "}
              <span className="text-sm uppercase font-mono rounded-md border-2 border-bg-tint-2 mx-0.5 px-1.5 py-0.5">
                Starter
              </span>{" "}
              plan.
            </p>
          </div>
        </div>
        <div>
          <div className="w-12 shrink-0 border-2 border-bg-tint-2 rounded-full overflow-hidden relative">
            <div className="w-full h-0 pb-[100%]"></div>
            <svg
              className="w-full h-full object-cover absolute inset-0"
              viewBox="0 0 122.52 122.523"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872a52.354 52.354 0 0 0-4.55 21.388zM96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501L48.2 93.547l11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
                <path d="m62.184 65.857-15.768 45.819a52.552 52.552 0 0 0 14.846 2.141c6.12 0 11.989-1.058 17.452-2.979a4.615 4.615 0 0 1-.374-.724zM107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" />
                <path d="M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.526 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="py-6 border-b-2 border-bg-tint-1">
        <h3 className="font-mono font-normal text-sm uppercase text-body-0 mb-2">
          Current Billing Cycle
        </h3>
        <p>Jan 16, 2022 – Feb 16, 2022 (Monthly)</p>
      </div>
      <div className="flex justify-end pt-6">
        <div className="flex-1">
          <table className="text-left w-full table-auto border-collapse">
            <thead className="font-mono text-sm uppercase text-body-0 border-b-2 border-bg-tint-0">
              <tr>
                <th className="font-normal p-3">Item</th>
                <th className="font-normal p-3 text-right">Count</th>
                <th className="font-normal p-3 text-right">Unit Price</th>
                <th className="font-normal p-3 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">Kinsta Starter Plan</td>
                <td className="p-3 text-right">&times; 1</td>
                <td className="p-3 text-right">$35</td>
                <td className="p-3 text-right">$35</td>
              </tr>
              <tr>
                <td className="p-3">Kinsta Starter Plan</td>
                <td className="p-3 text-right">&times; 1</td>
                <td className="p-3 text-right">$35</td>
                <td className="p-3 text-right">$35</td>
              </tr>
            </tbody>
            <tfoot className="font-bold bg-bg-tint-0">
              <tr>
                <td className="p-3" colSpan={3}>
                  Total
                </td>
                <td className="p-3 text-right">$35</td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* <div>
          <span className="font-mono">$35 USD / month</span>
        </div> */}
      </div>
    </div>
  );
}
