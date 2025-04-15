


// const { PrismaClient } = require('@prisma/client');
// import { PrismaClient } from '@prisma/client';
// lib/prisma.js
// import { PrismaClient } from "@prisma/client";/
import { PrismaClient } from "@/generated/prisma";
// import {PrismaClient}


// Extend the global object to include prisma (for type safety if using TypeScript)
const globalForPrisma = globalThis;

// console.log("database urL: ", process.env.DATABASE_URL)

// Initialize PrismaClient as a singleton
const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
// This line ensures PrismaClient is stored in the global object only during development. That way:

//     In development, hot-reloading can recreate modules multiple times, and this would lead to multiple PrismaClient instances being created, which can crash your app or throw errors.

//     In production, this isn't needed because the app is started only once, and modules are not reloaded—so a single instance is fine.
