import { CgClose } from "react-icons/cg";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";

export default function AdminAllPost({ PopUp, setPopUp, ownerId }) {
  const handleClose = () => {
    setPopUp(false);
  };

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

  return (
    <>
      {PopUp && (
        <>
          <div className="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-70"></div>
          <div className="fixed top-0 left-0 z-20 grid h-full w-full place-items-center">
            <div className="mx-auto h-[80vh] w-[80vw] overflow-auto rounded-lg bg-white px-9">
              <div className="flex items-center justify-end gap-3 rounded-t-lg  py-3 px-4">
                <button
                  className="rounded-lg border p-2 hover:border-red-500 hover:bg-red-500 hover:text-white"
                  onClick={handleClose}
                >
                  <CgClose className="text-2xl" />
                </button>
              </div>
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
                        <p className="font-['Cairo Light'] text-[#727272]">
                          {text}
                        </p>
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
                          <p className="text-base text-[#727272]">
                            {WriterName}
                          </p>
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
                          Sementara banyak bahan kimia di tempat kerja mungkin
                          tampak tidak berbahaya, beberapa di antaranya dapat
                          menimbulkan bahaya yang signifikan. Mengetahui mana
                          yang berbahaya dan bagaimana menangani bahan kimia
                          berbahaya dengan benar dapat membantu mencegah cedera
                          dan efek merugikan yang kronis. Di sini kita melihat
                          10 bahan kimia paling berbahaya di tempat kerja, yaitu
                          arsenik, timbal, benzena, kromium, toluena, kadmium,
                          zinc, merkuri, pestisida, dan limbah elektronik.
                          <br />
                          <br />
                          Bahan kimia berbahaya adalah segala jenis zat yang
                          berpotensi menyebabkan kerusakan pada organisme hidup,
                          termasuk manusia, dan lingkungan pada umumnya.
                          Berbagai negara dan yurisdiksi memiliki peraturan
                          khusus dan klasifikasi bahan kimia berbahaya. Meskipun
                          ini tidak berbeda secara signifikan, ada beberapa
                          perbedaan kecil dan kasus khusus. Di Inggris,
                          misalnya, bahan kimia berbahaya dikelompokkan ke dalam
                          kategori berikut, yaitu peledak, mengoksidasi, mudah
                          terbakar, beracun, berbahaya, korosif, mengiritasi,
                          dan berbahaya bagi lingkungan. Zat yang dikendalikan
                          juga diklasifikasikan sebagai berbahaya, meskipun
                          dengan berbagai tingkat bahaya. Demikian pula,
                          obat-obatan, seperti antibiotik, bisa berbahaya tanpa
                          resep yang tepat.
                          <br />
                          <br /> Sementara banyak bahan kimia di tempat kerja
                          mungkin tampak tidak berbahaya, beberapa di antaranya
                          dapat menimbulkan bahaya yang signifikan. Mengetahui
                          mana yang berbahaya dan bagaimana menangani bahan
                          kimia berbahaya dengan benar dapat membantu mencegah
                          cedera dan efek merugikan yang kronis. Di sini kita
                          melihat 10 bahan kimia paling berbahaya di tempat
                          kerja, yaitu arsenik, timbal, benzena, kromium,
                          toluena, kadmium, zinc, merkuri, pestisida, dan limbah
                          elektronik.
                          <br />
                          <br /> Bahan kimia berbahaya adalah segala jenis zat
                          yang berpotensi menyebabkan kerusakan pada organisme
                          hidup, termasuk manusia, dan lingkungan pada umumnya.
                          Berbagai negara dan yurisdiksi memiliki peraturan
                          khusus dan klasifikasi bahan kimia berbahaya. Meskipun
                          ini tidak berbeda secara signifikan, ada beberapa
                          perbedaan kecil dan kasus khusus. Di Inggris,
                          misalnya, bahan kimia berbahaya dikelompokkan ke dalam
                          kategori berikut, yaitu peledak, mengoksidasi, mudah
                          terbakar, beracun, berbahaya, korosif, mengiritasi,
                          dan berbahaya bagi lingkungan. Zat yang dikendalikan
                          juga diklasifikasikan sebagai berbahaya, meskipun
                          dengan berbagai tingkat bahaya. Demikian pula,
                          obat-obatan, seperti antibiotik, bisa berbahaya tanpa
                          resep yang tepat.
                          <br />
                          <br /> Sementara banyak bahan kimia di tempat kerja
                          mungkin tampak tidak berbahaya, beberapa di antaranya
                          dapat menimbulkan bahaya yang signifikan. Mengetahui
                          mana yang berbahaya dan bagaimana menangani bahan
                          kimia berbahaya dengan benar dapat membantu mencegah
                          cedera dan efek merugikan yang kronis. Di sini kita
                          melihat 10 bahan kimia paling berbahaya di tempat
                          kerja, yaitu arsenik, timbal, benzena, kromium,
                          toluena, kadmium, zinc, merkuri, pestisida, dan limbah
                          elektronik.
                          <br />
                          <br /> Bahan kimia berbahaya adalah segala jenis zat
                          yang berpotensi menyebabkan kerusakan pada organisme
                          hidup, termasuk manusia, dan lingkungan pada umumnya.
                          Berbagai negara dan yurisdiksi memiliki peraturan
                          khusus dan klasifikasi bahan kimia berbahaya. Meskipun
                          ini tidak berbeda secara signifikan, ada beberapa
                          perbedaan kecil dan kasus khusus. Di Inggris,
                          misalnya, bahan kimia berbahaya dikelompokkan ke dalam
                          kategori berikut, yaitu peledak, mengoksidasi, mudah
                          terbakar, beracun, berbahaya, korosif, mengiritasi,
                          dan berbahaya bagi lingkungan. Zat yang dikendalikan
                          juga diklasifikasikan sebagai berbahaya, meskipun
                          dengan berbagai tingkat bahaya. Demikian pula,
                          obat-obatan, seperti antibiotik, bisa berbahaya tanpa
                          resep yang tepat.
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
