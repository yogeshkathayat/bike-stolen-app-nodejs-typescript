import dotenv from "dotenv";

/**
 *   Load environment variables from .env file, where API keys and passwords are configured
 */
dotenv.config({ path: ".env" });

/**
 * Environment variables
 */
export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const basePath = "/api/v1";
export const postgres = {
    db: process.env.PGSQL_DB,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT,
    username: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASS,
};
export const sequelizeSyncForce = process.env.SEQUELIZE_SYNC_FORCE === "false" ? false : true;
export const logs = process.env.NODE_ENV === "production " ? "combined " : "dev";
