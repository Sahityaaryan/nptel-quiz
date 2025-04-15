// hey this is just a query wrapper where I will wrap a query into a simple async function which will each time connect to the database and also end the connection as well

import prisma from "@/app/lib/prisma";

export default function wrappe(fn) {

    return async function(){
        try {
            prisma.$connect();
            fn();
        } catch (err) {
            console.log("[Error]: ", err.message);
        } finally {
            prisma.$disconnect();
        }
    }

}