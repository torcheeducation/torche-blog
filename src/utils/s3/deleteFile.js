import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWSREGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWSKEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWSSECRET,
  }
})

export async function deletePostImageFromS3(key) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3BUCKET,
    Key: key,
  }

  const command = new DeleteObjectCommand(params)
  try {
    const response = await s3.send(command);
    console.log(response);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}