import AWS from "aws-sdk"

const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWSKEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWSSECRET,
  region: process.env.NEXT_PUBLIC_AWSREGION,
})

export async function deletePostImageFromS3(key) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3BUCKET,
    Key: key,
  }

  s3.deleteObject(params, function(err, data) {
    if (err) {
      console.log(err)
      return err
    } else {
      console.log(`File ${params.Key} has been deleted successfully`)
      return data
    }
  })
}