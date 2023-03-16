import Image from "next/image";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiLine } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#151515] p-5 ">
      <div className="md:grid md:grid-cols-1 md:py-12 md:px-11 md:pt-10 lg:flex lg:justify-between lg:p-20">
        <div className="md:order-0 object-contain lg:order-1">
          <ul>
            <li>
              <Image
                className=" md:w-[128px]"
                width={200}
                height={200}
                src={"/image/logo.png"}
                color="white"
                alt="torche education Logo "
              />
            </li>
            <li>
              <p className="text-sm font-light leading-7 text-white">
                Torche Education adalah perusahaan startup teknologi pendidikan
                yang <br className="hidden md:hidden lg:inline" />
                berbasis di Indonesia, dengan fokus pada teknik kimia, teknik
                bioproses, <br className="hidden md:hidden lg:inline" />
                dan mata pelajaran teknik proses lainnya.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-7 leading-5 md:mt-8 md:grid md:grid-cols-3 md:gap-0 lg:order-2 lg:mt-0 lg:flex lg:justify-center lg:gap-32">
          <div>
            <h2 className="mb-6 text-[28px] font-semibold text-white md:text-[19px] lg:text-[18px]">
              Link
            </h2>
            <ul className="text-sm font-light leading-7 text-white">
              <li>
                <Link
                  key={URL}
                  href={`/posts/${URL}`}
                  className="hover:underline"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  key={URL}
                  href={`/posts/${URL}`}
                  className="hover:underline"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  key={URL}
                  href={`/posts/${URL}`}
                  className="hover:underline"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  key={URL}
                  href={`/posts/${URL}`}
                  className="hover:underline"
                >
                  Kursus
                </Link>
              </li>
              <li>
                <Link
                  key={URL}
                  href={`/posts/${URL}`}
                  className="hover:underline"
                >
                  Karir
                </Link>
              </li>
            </ul>
          </div>
          <div className="order-2 flex justify-center pt-7 sm:pt-0 md:col-span-2 md:px-11">
            <div>
              <h2 className="mb-6 text-[28px] font-semibold text-white md:text-[19px] lg:text-[18px]">
                Kontak Kami
              </h2>
              <ul className="text-white">
                <li className="mb-4 leading-7">
                  <span className="text-base">
                    PT. Obor Pengetahuan Indonesia untuk Masyarakat
                  </span>{" "}
                  <br />
                  <span className="text-sm font-light">
                    Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27 Kab. Tangerang,
                    Banten
                    <br className="hidden md:hidden lg:inline" />
                    15810 Indonesia <br />
                  </span>
                  Whatsapp Business:{" "}
                  <span className="font-light">
                    +62 851 5521 6117
                  </span> <br /> Email:
                  <span className="font-light"> admin@torche.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 flex flex-col-reverse pb-3 sm:flex-row sm:items-center sm:justify-between md:mx-12 lg:mx-20 lg:pb-2">
        <span className="mt-7 text-sm text-white sm:mt-0 sm:text-center">
          Copyright Torche 2023
        </span>
        <div class="mt-4 space-x-6  sm:mt-0  sm:justify-center">
          <div className="flex flex-col gap-4 text-base text-white sm:flex-row ">
            <div className="flex gap-7">
              <a href="https://twitter.com/TorcheEdu/">
                <SiTwitter />
              </a>
              <a href="https://www.facebook.com/torche.edu/">
                <SiFacebook />
              </a>
              <a href="https://www.instagram.com/torche.app/">
                <SiInstagram />
              </a>
              <a href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw">
                <SiYoutube />
              </a>
              <a href="https://www.linkedin.com/company/torche-education/">
                <SiLinkedin />
              </a>
            </div>
            <div className="flex gap-7">
              <a href="https://vt.tiktok.com/ZSeu2n4ca/">
                <SiTiktok />
              </a>
              <a href="https://discord.com/invite/2fYBrcK785">
                <SiDiscord />
              </a>
              <a href="https://wa.me/+6285155216117">
                <SiWhatsapp />
              </a>
              <a href="https://page.line.me/229wiguf/">
                <SiLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
