import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import path from "path";
import {
    postgres
} from "./vars";

const dbConfig: any = {
    database: postgres.db,
    dialect: "postgres",
    host: postgres.host,
    port: postgres.port,
    logging: false,
    username: postgres.username,
    password: postgres.password,
    operatorsAliases: Op,
    modelPaths: [path.join(__dirname, "../api/models/*.model.*")],
    modelMatch: (filename: string, member: string) => filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
};


const sequelize = new Sequelize(dbConfig);

export default sequelize;
