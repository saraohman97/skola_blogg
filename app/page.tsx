import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  const posts = [
    {
      id: 1,
      heading: "Skolstart 1",
      text: "Grå eller vita Legraboxlådor i metall från välrenommerade Blum ingår som standard i alla våra kök. Våra stommar är byggda i en 19 mm möbelskiva, klädd med grå eller vit melamin. Önskar du uppgradera till lådor i massiv ek, måttanpassade lådinsatser eller fanérade skåp, finns detta att välja som tillval, se exempel längre ner.",
      date: "14 SEP 2024",
      image: "/bg.jpg",
    },
    {
      id: 2,
      heading: "Skolstart 2",
      text: "Grå eller vita Legraboxlådor i metall från välrenommerade Blum ingår som standard i alla våra kök. Klädd med grå eller vit melamin. Önskar du uppgradera till lådor i massiv ek, måttanpassade lådinsatser eller fanérade skåp, finns detta att välja som tillval, se exempel längre ner.",
      date: "14 SEP 2024",
      image: "/wine.jpg",
    },
    {
      id: 3,
      heading: "Skolstart",
      text: "Grå eller vita Legraboxlådor i metall från välrenommerade Blum ingår som standard i alla våra kök. Våra stommar är byggda i en 19 mm möbelskiva, klädd med grå eller vit melamin. Önskar du uppgradera till lådor i massiv ek, måttanpassade lådinsatser eller fanérade skåp, finns detta att välja som tillval, se exempel längre ner.",
      date: "14 SEP 2024",
      image: "/konfektyr.jpg",
    },
    {
      id: 4,
      heading: "Skolstart",
      text: "Grå eller vita Legraboxlådor i metall från välrenommerade Blum ingår som standard i alla våra kök. Våra stommar är byggda i en 19 mm möbelskiva, klädd med grå eller vit melamin. Önskar du uppgradera till lådor i massiv ek, måttanpassade lådinsatser eller fanérade skåp, finns detta att välja som tillval, se exempel längre ner.",
      date: "14 SEP 2024",
      image: "/other.jpg",
    },
    {
      id: 4,
      heading: "Skolstart",
      text: "Grå eller vita Legraboxlådor i metall från välrenommerade Blum ingår som standard i alla våra kök. Våra stommar är byggda i en 19 mm möbelskiva, klädd med grå eller vit melamin. Önskar du uppgradera till lådor i massiv ek, måttanpassade lådinsatser eller fanérade skåp, finns detta att välja som tillval, se exempel längre ner.",
      date: "14 SEP 2024",
      image: "/food.jpg",
    },
    {
      id: 4,
      heading: "Skolstart",
      text: "Grå eller vita Legraboxlådor i metall från välrenommerade Blum ingår som standard i alla våra kök. Våra stommar är byggda i en 19 mm möbelskiva, klädd med grå eller vit melamin. Önskar du uppgradera till lådor i massiv ek, måttanpassade lådinsatser eller fanérade skåp, finns detta att välja som tillval, se exempel längre ner.",
      date: "14 SEP 2024",
      image: "/christmas.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#FEFEFE] p-4 lg:p-10">
        <div className="flex flex-col-reverse relative lg:flex-row gap-10 lg:mx-20">
          <Image
            alt=""
            src="/devil2.png"
            width={500}
            height={500}
            className="absolute -top-20 -left-56 h-32 object-contain max-lg:hidden z-40"
          />
          <div className="text-white h-28 w-28 text-xs font-bold rounded-full p-2 absolute -top-14 -left-8 flex items-center z-40 justify-center text-center max-lg:hidden">
            Här börjar <br />
            resan
          </div>

          {/* MAINBAR */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="pb-10 relative">
                <Image
                  src={post.image}
                  alt=""
                  height={2000}
                  width={2000}
                  className="object-cover max-lg:h-20"
                />
                <div className="font-bold absolute">{post.heading}</div>
                <div className="text-xs absolute right-0">{post.date}</div>
              </div>
            ))}
          </div>

          {/* SIDEBAR */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
