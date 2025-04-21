import { Product } from "@/types";
import ProductCard from "./product-card";


const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const shownProducts = limit ? data?.slice(0, limit) : data;
  const hasProducts = shownProducts && shownProducts.length > 0;
  return (
    <div className="my-5">
      <h5 className="text-xl font-medium my-2">{title}</h5>

      {hasProducts ? (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shownProducts.map((product:Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="h-60 flex items-center justify-center text-gray-500 border rounded">
          No products found
        </div>
      )}
    </div>
  );
};

export default ProductList;
