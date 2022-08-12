import {
    Sequelize
} from "sequelize";

// const db = new Sequelize('mern_db', 'root', '', {
//     host: "localhost",
//     dialect: "mysql"
// });

const db = new Sequelize('mern_db', process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

export default db;