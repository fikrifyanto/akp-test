import { router, publicProcedure } from "../trpc.js";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const productRouter = router({
    list: publicProcedure.query(async () => {
        return prisma.product.findMany();
    }),
});
