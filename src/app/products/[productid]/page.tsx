export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  return (
    <>
      <h1>Detail about Products : {params.productid}</h1>;
    </>
  );
}
