import { notFound } from "next/navigation";

interface ProductDetailsProp {
  params: {
    productId: string;
  };
  searchParams: object;
}

export default function ProductDetails(props: ProductDetailsProp) {
  if (Number(props.params.productId) > 100) notFound();
  return (
    <>
      <h1>details page - Product {props.params.productId}</h1>
    </>
  );
}
