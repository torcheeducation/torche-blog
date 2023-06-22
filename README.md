# Torche Education Blog
This project was created by **Muhammad Naufal Farras** and **Moh. Nurul Anwar** as Group 2 Infrastructure - Torche Education Intern. The project was built based on a design plan by the Torche Education UI/UX team, with a development time of 4 months.

The technology used in this project is as follows:

[![My Skills](https://skills.thijs.gg/icons?i=react,next,mongodb,tailwind,aws)](https://skills.thijs.gg) 
- ReactJS
- NextJS
- MongoDB
- TailwindCSS
- Amazon Web Services (AWS)

# Getting Started
First, you can save this project on your computer by entering the following code in your computer's command prompt:
```
git clone https://github.com/naufalf25/torche-blog.git
# then
npm install
# all dependencies for project will installing
```
There is an environment variable in this project in the form of a file named **.env.local** and it needs to be added in the root of the project folder. The contents of the file are as follows:
```
# EXAMPLE .env.local

# mongodb
NEXT_PUBLIC_DBURI=#Your_MongoDB_URL

# secret token
NEXTAUTH_SECRET=#Your_NEXTAUTH_Secret_Code
NEXTAUTH_URL=http://127.0.0.1:3000 #Follow_Main_Domain

# internal
NEXT_PUBLIC_KEY=#Key_For_Signup
NEXT_PUBLIC_URL=http://127.0.0.1:3000 #Follow_Main_Domain

# AWS S3 TORCHE
NEXT_PUBLIC_S3BUCKET=#Your_AWS_S3Bucket_Name
NEXT_PUBLIC_AWSKEY=#Your_AWS_Access_Key
NEXT_PUBLIC_AWSSECRET=#Your_AWS_Secret_Access_Key
NEXT_PUBLIC_AWSREGION=#Your_AWS_Region
```

For a **development environment**, you can directly run the following command:
```
npm run dev
# or
yarn dev
# or
pnpm dev

# open browser and insert http://localhost:3000
```
To enter **production environment** you need to do `npm run build` first then do `npm run start` as follows:
```
npm run build
# then
npm run start

# open browser and insert http://localhost:3000
```

# Learn More
To learn more about this project, take a look at the following resources:
- [NextJS Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn NextJS](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction) - for NextAuth.js tutorial, and features.

# Something Wrong ?
Feel free to contact **contributors** for support and solutions, thank you! :blush:
