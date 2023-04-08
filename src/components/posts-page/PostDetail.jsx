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
import React, { Component } from "react";

class PostDetail extends Component {
  render() {
    const PostDetails = [
      {
        id: 1,
        category: "Edukasi",
        time: "10 menit baca",
        title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
        text: "Bahan kimia berbahaya harus disimpan dalam wadah tertutup rapat. Mereka tidak boleh terkena suhu tinggi dan mereka juga harus memiliki label yang sesuai yang ditempelkan padanya.",
        person: "/img/writer.jpg",
        WriterName: "Adem Saridewi, Penulis Rajin",
        date: "10 November 2022",
        image: "/img/postingan1.png",
      },
    ];
    const RelatedPosts = [
      {
        id: 1,
        image: "/img/detailpost.jpg",
        date: "10 November 2022",
        title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
      },
      {
        id: 2,
        image: "/img/detailpost.jpg",
        date: "10 November 2022",
        title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
      },
    ];

    const url = `https://example.com/blog/ `;

    const shareToInstagram = async (id) => {
      const apiUrl = `https://graph.instagram.com/${id}?fields=id,permalink&access_token=192899356825650`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const permalink = data.permalink;

        const shareUrl = `https://www.instagram.com/username/?utm_source=ig_share_sheet&igshid=SHARE_ID&url=${encodeURIComponent(
          permalink
        )}`;
        window.open(shareUrl);
      } catch (error) {
        console.log(error);
      }
    };

    const handleShareButtonClick = ({ id }) => {
      shareToInstagram(id);
    };

    return (
      <div className="mx-2 sm:mx-7">
        {PostDetails.map(
          ({
            id,
            date,
            title,
            image,
            category,
            time,
            text,
            person,
            WriterName,
          }) => {
            return (
              <div key={id}>
                <div className="flex gap-1 ">
                  <h6 className="text-sm font-semibold text-[#9284F1]">
                    {category}
                  </h6>
                  <RxDotFilled className="mt-[2px]" />
                  <p className="text-sm text-[#A7A7A7]">{time}</p>
                </div>
                <div className="mt-4 ">
                  <h1 className="font-['Rajdhani'] text-[43px] font-bold  ">
                    {title}
                  </h1>
                  <p className="font-['Cairo Light'] text-[#727272]"> {text}</p>
                </div>
                <div className="mt-9 flex">
                  <Image
                    src={person}
                    alt="writer"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                  <div className="m-2 ml-6">
                    <p className="text-base text-[#727272]">{WriterName}</p>
                    <p className="text-base text-[#A7A7A7]">{date}</p>
                  </div>
                </div>
                <div className="my-10">
                  <Image
                    src={image}
                    alt="writer"
                    width={500}
                    height={500}
                    className="h-full w-full"
                  />

                  <p className="font-['Cairo Light'] my-10">
                    Sementara banyak bahan kimia di tempat kerja mungkin tampak
                    tidak berbahaya, beberapa di antaranya dapat menimbulkan
                    bahaya yang signifikan. Mengetahui mana yang berbahaya dan
                    bagaimana menangani bahan kimia berbahaya dengan benar dapat
                    membantu mencegah cedera dan efek merugikan yang kronis. Di
                    sini kita melihat 10 bahan kimia paling berbahaya di tempat
                    kerja, yaitu arsenik, timbal, benzena, kromium, toluena,
                    kadmium, zinc, merkuri, pestisida, dan limbah elektronik.
                    <br />
                    <br />
                    Bahan kimia berbahaya adalah segala jenis zat yang
                    berpotensi menyebabkan kerusakan pada organisme hidup,
                    termasuk manusia, dan lingkungan pada umumnya. Berbagai
                    negara dan yurisdiksi memiliki peraturan khusus dan
                    klasifikasi bahan kimia berbahaya. Meskipun ini tidak
                    berbeda secara signifikan, ada beberapa perbedaan kecil dan
                    kasus khusus. Di Inggris, misalnya, bahan kimia berbahaya
                    dikelompokkan ke dalam kategori berikut, yaitu peledak,
                    mengoksidasi, mudah terbakar, beracun, berbahaya, korosif,
                    mengiritasi, dan berbahaya bagi lingkungan. Zat yang
                    dikendalikan juga diklasifikasikan sebagai berbahaya,
                    meskipun dengan berbagai tingkat bahaya. Demikian pula,
                    obat-obatan, seperti antibiotik, bisa berbahaya tanpa resep
                    yang tepat.
                    <br />
                    <br /> Sementara banyak bahan kimia di tempat kerja mungkin
                    tampak tidak berbahaya, beberapa di antaranya dapat
                    menimbulkan bahaya yang signifikan. Mengetahui mana yang
                    berbahaya dan bagaimana menangani bahan kimia berbahaya
                    dengan benar dapat membantu mencegah cedera dan efek
                    merugikan yang kronis. Di sini kita melihat 10 bahan kimia
                    paling berbahaya di tempat kerja, yaitu arsenik, timbal,
                    benzena, kromium, toluena, kadmium, zinc, merkuri,
                    pestisida, dan limbah elektronik.
                    <br />
                    <br /> Bahan kimia berbahaya adalah segala jenis zat yang
                    berpotensi menyebabkan kerusakan pada organisme hidup,
                    termasuk manusia, dan lingkungan pada umumnya. Berbagai
                    negara dan yurisdiksi memiliki peraturan khusus dan
                    klasifikasi bahan kimia berbahaya. Meskipun ini tidak
                    berbeda secara signifikan, ada beberapa perbedaan kecil dan
                    kasus khusus. Di Inggris, misalnya, bahan kimia berbahaya
                    dikelompokkan ke dalam kategori berikut, yaitu peledak,
                    mengoksidasi, mudah terbakar, beracun, berbahaya, korosif,
                    mengiritasi, dan berbahaya bagi lingkungan. Zat yang
                    dikendalikan juga diklasifikasikan sebagai berbahaya,
                    meskipun dengan berbagai tingkat bahaya. Demikian pula,
                    obat-obatan, seperti antibiotik, bisa berbahaya tanpa resep
                    yang tepat.
                    <br />
                    <br /> Sementara banyak bahan kimia di tempat kerja mungkin
                    tampak tidak berbahaya, beberapa di antaranya dapat
                    menimbulkan bahaya yang signifikan. Mengetahui mana yang
                    berbahaya dan bagaimana menangani bahan kimia berbahaya
                    dengan benar dapat membantu mencegah cedera dan efek
                    merugikan yang kronis. Di sini kita melihat 10 bahan kimia
                    paling berbahaya di tempat kerja, yaitu arsenik, timbal,
                    benzena, kromium, toluena, kadmium, zinc, merkuri,
                    pestisida, dan limbah elektronik.
                    <br />
                    <br /> Bahan kimia berbahaya adalah segala jenis zat yang
                    berpotensi menyebabkan kerusakan pada organisme hidup,
                    termasuk manusia, dan lingkungan pada umumnya. Berbagai
                    negara dan yurisdiksi memiliki peraturan khusus dan
                    klasifikasi bahan kimia berbahaya. Meskipun ini tidak
                    berbeda secara signifikan, ada beberapa perbedaan kecil dan
                    kasus khusus. Di Inggris, misalnya, bahan kimia berbahaya
                    dikelompokkan ke dalam kategori berikut, yaitu peledak,
                    mengoksidasi, mudah terbakar, beracun, berbahaya, korosif,
                    mengiritasi, dan berbahaya bagi lingkungan. Zat yang
                    dikendalikan juga diklasifikasikan sebagai berbahaya,
                    meskipun dengan berbagai tingkat bahaya. Demikian pula,
                    obat-obatan, seperti antibiotik, bisa berbahaya tanpa resep
                    yang tepat.
                  </p>
                </div>
                <div className="mt-20 grid place-items-center gap-5 sm:mt-28">
                  <h2 className="font-['Cairo Light'] text-lg text-[#999999]">
                    Bagikan Postingan:
                  </h2>
                  <div className="flex gap-7 text-[#5885E9]">
                    <TwitterShareButton url={url} quote={title}>
                      <SiTwitter />
                    </TwitterShareButton>
                    <FacebookShareButton url={url} quote={title}>
                      <SiFacebook />
                    </FacebookShareButton>
                    <LinkedinShareButton url={url} quote={title}>
                      <SiLinkedin />
                    </LinkedinShareButton>
                    <LineShareButton url={url} quote={title}>
                      <SiLine />
                    </LineShareButton>
                    <WhatsappShareButton url={url} title={title}>
                      <IoLogoWhatsapp />
                    </WhatsappShareButton>
                    <SiDiscord />
                    <button onClick={handleShareButtonClick}>
                      <AiFillInstagram />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}

        <div className="mb-6 mt-24 sm:mt-32">
          <h2 className="left-0 top-0 mb-10 inline-block text-2xl uppercase text-slate-500">
            POSTINGAN TERKAIT
          </h2>
          <div className="flex gap-6">
            {RelatedPosts.map(({ id, title, image, date }) => {
              return (
                <Link
                  key={id}
                  href={`/posts/${id}`}
                  className="group group-hover:text-blue-600"
                >
                  <Image
                    src={image}
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
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default PostDetail;
