import nc from "next-connect"

const onError = (err, req, res, next) => {
  console.error(err)
  res.status(500).end(err.toString())
}

const handler = nc({
  onError: onError,
  onNoMatch: (req, res) => {
    res.status(404).send("Page is not found")
  }
})

export default handler
