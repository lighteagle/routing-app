import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  return (
    <>
      <Link href="/order-product">Order</Link>
      <h1>Detail about Products : {params.productid}</h1>;
    </>
  );
}
