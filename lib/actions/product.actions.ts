'use server'
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils"

// Get latest product
export async function getProducts() {
    const data = await prisma.product.findMany({
        take:10,
        orderBy: { createdAt: 'desc' }
    });

    const plainData = convertToPlainObject(data);
    return plainData;
}

// Get latest product by slug
export async function getProductsBySlug(slug:string) {
    return await prisma.product.findFirst({where:{slug: slug}})
}