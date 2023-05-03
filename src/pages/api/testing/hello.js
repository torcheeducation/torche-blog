export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(404).json({ message: "Method not allowed!" })
  }

  res.status(200).json({ message: "Success call Hello API Route!" })
}