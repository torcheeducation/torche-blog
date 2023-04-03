/** @type {import('next').NextConfig} */
const withWorkbox = require('next-with-workbox');

module.exports = withWorkbox({
  reactStrictMode: true,
  images: {
    domains: [
      `${process.env.NEXT_PUBLIC_S3BUCKET}.s3.amazonaws.com`,
      `${process.env.NEXT_PUBLIC_S3BUCKET}.s3.${process.env.NEXT_PUBLIC_AWSREGION}.amazonaws.com`
    ],
  },
})
