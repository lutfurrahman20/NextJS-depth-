export default async function productDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h3>Details about product {productId}</h3>;
}
