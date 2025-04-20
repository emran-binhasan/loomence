import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
const Homepage = () => {
  console.log(sampleData);
  return <ProductList data={sampleData.products} title={"New Arrivals"} limit={10}/>;
};

export default Homepage;
