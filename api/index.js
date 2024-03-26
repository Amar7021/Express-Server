import app from "./app.js"
import connectToDB from "./db/connect.js"
import dotenv from "dotenv"

dotenv.config({ path: "./.env" })

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
