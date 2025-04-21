import ProductList from "@/components/shared/product/product-list";
import { getProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constsants";

const Homepage =async () => {
  const products = await getProducts()
  return (
    <ProductList data={products} title={"New Arrivals"} limit={LATEST_PRODUCT_LIMIT} />
  );
};

export default Homepage;
