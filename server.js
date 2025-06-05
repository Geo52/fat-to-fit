const express = require("express")
const { Pool } = require("pg")
const dotenv = require("dotenv")
const app = express()

dotenv.config()

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

const pool = new Pool({
    
})

// pool.query('SELECT NOW()', (err, result) => {
//     if (err) {
//         console.log("errr");
//     } else {
//         console.log("success", result.rows[0].now);
//     }
// })

app.get("/", (req, res) => {
    res.render("index.ejs", {})

})

app.get("/input-calories", (req, res) => {

})

app.listen(3000)