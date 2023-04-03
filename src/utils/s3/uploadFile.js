import AWS from "aws-sdk"
import { promisify } from "util"

const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWSKEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWSSECRET,
  region: process.env.NEXT_PUBLIC_AWSREGION,
})

export async function uploadPostImageToS3(file) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3BUCKET,
    Key: `posts/${new Date().getTime()}-${file.name}`,
    Body: file.data,
    ACL: "public-read",
    ContentType: file.type,
  }

  const upload = promisify(s3.upload.bind(s3))
  const result = await upload(params)

  return result.Location
}

export async function uploadUserImageToS3(file) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3BUCKET,
    Key: `users/${new Date().getTime()}-${file.name}`,
    Body: file.data,
    ACL: "public-read",
    ContentType: file.type,
  }

  const upload = promisify(s3.upload.bind(s3))
  const result = await upload(params)

  return result.Location
}
