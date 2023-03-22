const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, username, password } = req.body

    if (!name || !username || !password) {
      res.status(422).json({ message: "Invalid Data" })
      return
    }

    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.avbotnb.mongodb.net/?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const db = client.db()
    const checkExisting = await db.collection("users").findOne({ username: username })
    if (checkExisting) {
      res.status(422).json({ message: "User already exists" })
      client.close()
      return
    }

    const status = await db.collection("users").insertOne({
      name,
      username,
      password: await bcrypt.hash(password, 12)
    })
    res.status(201).json({ message: "User created", ...status })
    client.close()
  } else {
    res.status(500).json({ message: "Route not valid!" })
  }
}

export default handler
