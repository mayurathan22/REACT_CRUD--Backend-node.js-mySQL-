import dotenv from "dotenv";

dotenv.config();

console.log(process.env.host);
export const DBCONFIG = {
  user: "root",
  host: "localhost",
  password: "",
  database: "employeesystem",
};
