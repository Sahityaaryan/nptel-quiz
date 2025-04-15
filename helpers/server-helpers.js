
import prisma from '@/app/lib/prisma'


export const connectToDatabase = async () => {


    try {
        await prisma.$connect();
    } catch (err) {
        console.log('[Err-Connecting-To-Database]: ',err.message);
        throw new Error("Unable to connect to database");
    }
}