'use server'
import { PrismaClient } from "@prisma/client"
import { convertToPlainObject } from "../utils"

export async function getProducts() {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take:10,
        orderBy: { createdAt: 'desc' }
    });

    const plainData = convertToPlainObject(data);
    return plainData;
}
