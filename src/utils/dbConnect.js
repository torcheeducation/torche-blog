import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URI
if (!MONGODB_URI) {
  throw new Error("Please define the MongoDB URI environtment variable")
}

let cached = global.mongoose
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => mongoose)
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
