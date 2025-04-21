import { getProductsBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductsBySlug(slug);
  if (!product) notFound();
  console.log(product);
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Image */}
          <div className="col-span-2"></div>
          {/* Info */}
          <div className="col-span-2 flex flex-col p-4  gap-4">
            <span>
              {product.brand} {product.category}
            </span>
            <h2 className="h3-bold">{product.name}</h2>
            <p>
              {product.rating} {product.numReviews} Reviews
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                value={Number(product.price)}
                className="w-24 rounded-xl bg-green-100 text-green-700 px-4 py-1"
              />
            </div>
            <div className="my-5">
              <h5 className="font-semibold">Description</h5>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Action */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className=" flex justify-between items-center">
                  <h5>Price</h5>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="my-2 flex justify-between">
                    <h5>Status</h5>
                    {product.stock > 0 ?(<Badge variant={'outline'}>{product.stock}</Badge>):(<Badge variant={'destructive'}>Out of Stock</Badge>)}
                </div>
                {product.stock > 0 ? (<Button className="w-full">Add to Cart</Button>):''}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
