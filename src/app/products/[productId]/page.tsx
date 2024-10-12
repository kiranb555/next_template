export default function ProductDetails({
  params,
}: {
  params: { productId: String };
}) {
  return <div>Product details - {params.productId}</div>;
}
