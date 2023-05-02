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

function PostDetail({ post, date }) {
  const [numPost] = useState(1);
  const [numPostBottom] = useState(2);

  console.log(post);
  console.log(date);

  return (
    <div className="mx-2 sm:mx-7">
      {post
        .slice(0, numPost)
        .map(({ _id, title, description, imageUrl, date }) => (
          <div>
            <div key={_id} className="flex gap-1 ">
              <h6 className="text-sm font-semibold text-[#9284F1]">categori</h6>
              <RxDotFilled className="mt-[2px]" />
              <p className="text-sm text-[#A7A7A7]">{date}</p>
            </div>
            <div className="mt-4 ">
              <h1 className="font-['Rajdhani'] text-[43px] font-bold">
                {title}
              </h1>
              <p className="font-['Cairo Light'] text-[#727272]">text</p>
            </div>
            <div className="mt-9 flex">
              <Image
                src={imageUrl}
                alt="writer"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="m-2 ml-6">
                <p className="text-base text-[#727272]">WriterName</p>
                <p className="text-base text-[#A7A7A7]">{date}</p>
              </div>
            </div>
            <div className="my-10">
              <Image
                src={imageUrl}
                alt="writer"
                width={500}
                height={500}
                className="h-full w-full"
              />
              <p className="font-['Cairo Light'] my-10">{description}</p>
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
        ))}

      <div className="mb-6 mt-24 sm:mt-32">
        <h2 className="left-0 top-0 mb-10 inline-block text-2xl uppercase text-slate-500">
          POSTINGAN TERKAIT
        </h2>
        <div className="flex gap-6">
          {post
            .slice(0, numPostBottom)
            .map(({ _id, title, description, imageUrl, date }) => (
              <Link
                key={_id}
                href={`/posts/${_id}`}
                className="group group-hover:text-blue-600"
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  width={500}
                  height={400}
                  className="w-full rounded-md "
                />
                <div className="mt-5">
                  <p className="mb-4 capitalize text-blueDate">{date}</p>
                  <h2 className="font-['Cairo Light'] text-lg font-bold line-clamp-2 group-hover:text-blue-600">
                    {title}
                  </h2>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
export default PostDetail;
