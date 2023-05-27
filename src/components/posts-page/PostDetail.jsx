import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
import { SiFacebook, SiTwitter, SiLinkedin, SiLine } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import {
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", MySwal.stopTimer);
    toast.addEventListener("mouseleave", MySwal.resumeTimer);
  },
});

function PostDetail({ post, relatedPost, date, owner, url }) {
  console.log(post);
  const router = useRouter();
  const postUrl = `${url}${router.asPath}`;

  function copyUrl() {
    navigator.clipboard.writeText(postUrl);

    Toast.fire({
      icon: "success",
      title: "Berhasil menyimpan URL ke dalam clipboard",
    });
  }

  return (
    <div className="mx-2 sm:mx-7">
      <div>
        <div className="flex gap-1 ">
          <h6 className="text-sm font-semibold capitalize text-[#9284F1]">
            {post.category}
          </h6>
          <RxDotFilled className="mt-[2px]" />
          <p className="text-sm capitalize text-[#A7A7A7]">
            {post.estimatedReading} menit baca
          </p>
        </div>
        <div className="mt-4 ">
          <h1 className="font-['Rajdhani'] text-[43px] font-bold capitalize">
            {post.title}
          </h1>
          <p className="font-['Cairo Light'] text-[#727272]">
            {post.shortText}
          </p>
        </div>
        <div className="mt-9 flex">
          <Image
            src={owner.imageUrl}
            alt="writer"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="m-2 ml-6">
            <p className="text-base text-[#727272]">{owner.name}</p>
            <p className="text-base capitalize text-[#A7A7A7]">{date}</p>
          </div>
        </div>
        <div className="my-10">
          <Image
            src={post.imageUrl}
            alt="writer"
            width={500}
            height={500}
            className="h-full w-full rounded-md"
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
          <div className="flex gap-4 text-[#5885E9]">
            <div className="flex items-center justify-center rounded-full bg-slate-100 p-2">
              <TwitterShareButton url={postUrl}>
                <SiTwitter title="Bagikan ke Twitter" />
              </TwitterShareButton>
            </div>
            <div className="flex items-center justify-center rounded-full bg-slate-100 p-2">
              <FacebookShareButton url={postUrl}>
                <SiFacebook title="Bagikan ke Facebook" />
              </FacebookShareButton>
            </div>
            <div className="flex items-center justify-center rounded-full bg-slate-100 p-2">
              <LinkedinShareButton url={postUrl}>
                <SiLinkedin title="Bagikan ke Linkedin" />
              </LinkedinShareButton>
            </div>
            <div className="flex items-center justify-center rounded-full bg-slate-100 p-2">
              <LineShareButton url={postUrl}>
                <SiLine title="Bagikan ke Line" />
              </LineShareButton>
            </div>
            <div className="flex items-center justify-center rounded-full bg-slate-100 p-2">
              <WhatsappShareButton url={postUrl}>
                <IoLogoWhatsapp title="Bagikan ke Whatsapp" />
              </WhatsappShareButton>
            </div>
            <div
              title="Copy Link URL"
              className="flex items-center justify-center rounded-full bg-slate-100 p-2"
            >
              <MdOutlineContentCopy
                className="cursor-pointer"
                onClick={copyUrl}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 mt-24">
        {relatedPost.length > 1 && (
          <h2 className="left-0 top-0 mb-10 inline-block text-2xl uppercase text-slate-500">
            POSTINGAN TERKAIT
          </h2>
        )}

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-6">
          {relatedPost.map((article) => (
            <Link
              key={article._id}
              href={`/posts/${article._id}`}
              className="group group-hover:text-blue-600 sm:w-1/2"
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={500}
                height={400}
                style={{
                  objectFit: "cover",
                }}
                className="h-52 w-full rounded-md md:h-80"
              />
              <div className="mt-5">
                <p className="mb-4 text-sm capitalize text-blueDate md:text-base">
                  {date}
                </p>
                <h2 className="font-['Cairo Light'] font-bold line-clamp-2 group-hover:text-blue-600 md:text-lg">
                  {article.title}
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
