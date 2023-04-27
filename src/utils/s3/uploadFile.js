import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWSREGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWSKEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWSSECRET,
  }
})

export async function uploadPostImageToS3(file) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3BUCKET,
    Key: `${file.category ? file.category : "posts"}/${new Date().getTime()}-${file.name}`,
    Body: file.data,
    ACL: "public-read",
    ContentType: file.type,
  }

  const command = new PutObjectCommand(params)
  await s3.send(command)
  
  const url = `https://${params.Bucket}.s3.${process.env.NEXT_PUBLIC_AWSREGION}.amazonaws.com/${params.Key}`

  return url
}

export async function uploadUserImageToS3(file) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3BUCKET,
    Key: `users/${new Date().getTime()}-${file.name}`,
    Body: file.data,
    ACL: "public-read",
    ContentType: file.type,
  }

  const command = new PutObjectCommand(params)
  await s3.send(command)

  const url = `https://${params.Bucket}.s3.${process.env.NEXT_PUBLIC_AWSREGION}.amazonaws.com/${params.Key}`

  return url
}
