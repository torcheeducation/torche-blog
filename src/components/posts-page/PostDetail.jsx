import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiLine } from "react-icons/si";
import {
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import ScrollToTopButton from "@/pages/ScrollToTopButton";

function PostDetail({ post, date, posts }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/api/posts=${posts}`
        );
        const data = await response.json();
        setRecommendations(data.category);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchData();
  }, [posts]);

  console.log();

  return (
    <div className="mx-2 sm:mx-7">
      <div>
        <div className="flex gap-1 ">
          <h6 className="text-sm font-semibold text-[#9284F1]">
            {post.category}
          </h6>
          <RxDotFilled className="mt-[2px]" />
          <p className="text-sm text-[#A7A7A7]">{date}</p>
        </div>
        <div className="mt-4 ">
          <h1 className="font-['Rajdhani'] text-[43px] font-bold">
            {post.title}
          </h1>
          <p className="font-['Cairo Light'] text-[#727272]">
            {post.shortText}
          </p>
        </div>
        <div className="mt-9 flex">
          <Image
            src={post.imageUrl}
            alt="writer"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="m-2 ml-6">
            <p className="text-base text-[#727272]">{post.ownerId}</p>
            <p className="text-base text-[#A7A7A7]">{date}</p>
          </div>
        </div>
        <div className="my-10">
          <Image
            src={post.imageUrl}
            alt="writer"
            width={500}
            height={500}
            className="h-full w-full"
          />
          <div
            className="font-['Cairo Light'] my-10"
            dangerouslySetInnerHTML={{ __html: post.description }}
          ></div>
        </div>
        <div className="mt-20 grid place-items-center gap-5 sm:mt-28">
          <h2 className="font-['Cairo Light'] text-lg text-[#999999]">
            Bagikan Postingan:
          </h2>
          <div className="flex gap-7 text-[#5885E9]">
            <TwitterShareButton>
              <SiTwitter />
            </TwitterShareButton>
            <FacebookShareButton>
              <SiFacebook />
            </FacebookShareButton>
            <LinkedinShareButton>
              <SiLinkedin />
            </LinkedinShareButton>
            <LineShareButton>
              <SiLine />
            </LineShareButton>
            <WhatsappShareButton>
              <IoLogoWhatsapp />
            </WhatsappShareButton>
            <SiDiscord />
            <AiFillInstagram />
          </div>
        </div>
      </div>
      {/* <div className="mb-6 mt-24 sm:mt-32">
        <h2 className="left-0 top-0 mb-10 inline-block text-2xl uppercase text-slate-500">
          POSTINGAN TERKAIT
        </h2>

        <div className="flex gap-6">
          {recommendations.map((article) => (
            <Link
              key={article._id}
              href={`/posts/${article._id}`}
              className="group group-hover:text-blue-600"
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={500}
                height={400}
                className="w-full rounded-md "
              />
              <div className="mt-5">
                <p className="mb-4 capitalize text-blueDate">{date}</p>
                <h2 className="font-['Cairo Light'] text-lg font-bold line-clamp-2 group-hover:text-blue-600">
                  {article.title}
                </h2>
              </div>
            </Link>
          ))}

          <Link
            key={post._id}
            href={`/posts/${post._id}`}
            className="group group-hover:text-blue-600"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={500}
              height={400}
              className="w-full rounded-md "
            />
            <div className="mt-5">
              <p className="mb-4 capitalize text-blueDate">{date}</p>
              <h2 className="font-['Cairo Light'] text-lg font-bold line-clamp-2 group-hover:text-blue-600">
                {post.title}
              </h2>
            </div>
          </Link>
        </div>
      </div> */}
      <ScrollToTopButton />
    </div>
  );
}

export default PostDetail;
