require('dotenv').config()

const express = require('express')
const routes = require('./routers')

const cors = require('cors')
const path = require('path')

const port = process.env.PORT
const app = express()
const cookieParser = require("cookie-parser")

app.use(cors())

app.use(
    express.urlencoded({
        extended: true
    })
)

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.use(cookieParser())
app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})