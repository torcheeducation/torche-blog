/** @type {import('next').NextConfig} */
const withWorkbox = require('next-with-workbox');

module.exports = withWorkbox({
  reactStrictMode: true,
  images: {
    domains: [
      `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
      `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
      'torche-blog-post-images.s3.ap-southeast-1.amazonaws.com',
      'torche-blog-post-images.s3.amazonaws.com'
    ],
  },
})
