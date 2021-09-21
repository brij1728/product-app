import { ProductCard } from "../ProductCard";

export const ProductList: React.FC = () => {
  const products = [
    {
      id: "serram16",
      name: "16 GB RAM Server",
      price: "$1025.5",
    },
    {
      id: "serram32",
      name: "32 GB RAM Server",
      price: "$2549.99",
    },
    {
      id: "serram8",
      name: "8 GB RAM Server",
      price: "$100",
    },
  ];
  return (
    <>
      {products.map((p) => {
        return <ProductCard name={p.name} price={p.price} key={p.id} />;
      })}
    </>
  );
};
