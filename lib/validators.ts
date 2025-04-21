import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string().refine((value)=>/^\d+(\.\d{2}?)$/.test(formatNumberWithDecimal(Number(value))),'Price must have exactly two decimal')

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be atleast e characters"),
  slug: z.string().min(3, "Slug must be atleast e characters"),
  category: z.string().min(3, "Category must be atleast e characters"),
  images: z.array(z.string()).min(1, "Product must have atleast one image"),
  brand: z.string().min(3, "Brand must be atleast e characters"),
  description: z.string().min(3, "Description must be atleast e characters"),
  stock: z.coerce.number(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
