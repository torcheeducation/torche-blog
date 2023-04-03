export async function getPosts() {
  const res = await fetch("/api/posts")
  const data = await res.json()

  return data
}

export async function getVisitor() {
  const res = await fetch("/api/visitor")
  const data = await res.json()

  return data
}
