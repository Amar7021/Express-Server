import express from "express"
import cors from "cors"

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

// Routes
// app.use("/", (_, res) => {
//   res.send({ Message: "Welcome to Express World!" })
// })

app.use("/user", (_, res) => {
  res.send({ Message: "Welcome user!!" })
})

export default app
