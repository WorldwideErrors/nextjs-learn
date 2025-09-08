export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  // ...
}

function fetchFilteredInvoices(query: string, currentPage: number) {
    throw new Error("Function not implemented.");
}
