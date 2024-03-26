import mongoose from "mongoose"

export default async function connectToDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
    console.log(
      `Mongodb connected!!! DB Host: ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log("Error connecting to Database: ", error)
    process.exit(1)
  }
}
