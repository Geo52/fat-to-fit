const express = require("express")
const { Pool } = require("pg")
const dotenv = require("dotenv")
const app = express()

dotenv.config()

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

// Database configuration based on environment
let poolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 5432,
}

// Override with production settings when in production environment
if (process.env.NODE_ENV === 'production') {
    poolConfig = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
}

const pool = new Pool(poolConfig)


app.get("/", (req, res) => {
    res.render("index.ejs", {})

})

app.get("/input-calories", (req, res) => {

})

const PORT = process.env.PORT || 3000;
app.listen(PORT)