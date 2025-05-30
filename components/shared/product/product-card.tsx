import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: {product: Product}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
        <h3 className="text-sm font-medium">{product.name}</h3>
        </Link>
        <div className="flex justify-between items-center gap-2">
            <p>{product.rating}</p>
            {product.stock > 0 ?<ProductPrice value={Number(product.price)} className="text-gray-700"/> : <p className="text-sm text-destructive">Out of Stock</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
