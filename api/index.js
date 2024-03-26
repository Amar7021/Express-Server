const connectToDB = require("./db/connect.js")
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config({ path: "./.env" })

const app = express()

// Middleswares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

const PORT = process.env.PORT || 5000

// Connect to DB
connectToDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error occurred while connecting to DB: ", error)
    })

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.log("MongoDB connection failed!!!", error)
  })

// Routes
app.use("/", (_, res) => {
  res.send({ Message: "Welcome to Express World!" })
})

app.use("/user", (_, res) => {
  res.send({ Message: "Welcome to Express World!" })
})

// module.exports = app
