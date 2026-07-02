"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
const node_process_1 = require("node:process");
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: node_process_1.env.DATABASE_URL,
});
const prisma = new client_1.PrismaClient({
    adapter,
});
exports.default = prisma;
