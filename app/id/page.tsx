import Navbar from "@/components/navbar";
import Image from "next/image";

const Id = () => {
  const images = [
    {
      id: 1,
      image: "/christmas.jpg",
      text: "Spagetti och köttfärssås 1",
    },
    {
      id: 1,
      image: "/konfektyr.jpg",
      text: "Spagetti och köttfärssås 1",
    },
    {
      id: 1,
      image: "/bg.jpg",
      text: "Spagetti och köttfärssås 1",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#FEFEFE] min-h-screen">
        <div className="lg:max-w-screen-2xl lg:px-32 mb-4 mx-auto ">
          <h1 className="text-xl italic font-bold text-neutral-800 mb-3 text-center">
            Skolstart
          </h1>

          <div className="max-w-[600px] leading-relaxed mx-auto mb-4 text-neutral-600 text-md text-center">
            Grå eller vita Legraboxlådor i metall från välrenommerade Blum ingår
            som standard i alla våra kök. Våra stommar är byggda i en 19 mm
            möbelskiva, klädd med grå eller vit melamin. Önskar du uppgradera
            till lådor i massiv ek, måttanpassade lådinsatser eller fanérade
            skåp, finns detta att välja som tillval, se exempel längre ner.
          </div>

          <div className="relative">
            <Image
              alt=""
              src="/devil2.png"
              width={500}
              height={500}
              className="absolute -top-20 -left-56 h-32 object-contain max-lg:hidden z-40"
            />
            <div className="text-white h-28 w-28 text-xs font-bold rounded-full p-2 absolute -top-14 -left-8 flex items-center z-40 justify-center text-center max-lg:hidden">
              Tillbaka
            </div>

            {/* <div className="text-xs font-bold">
            Hem <span className="px-2">{">"}</span> Skolstart
          </div> */}

            <div
              className={`${
                images.length === 1 ? "w-[600px] mx-auto" : "columns-2"
              } gap-2 text-sm`}
            >
              {images.map((image) => (
                <div key={image.id} className="relative pb-10">
                  <Image
                    src={image.image}
                    alt=""
                    height={500}
                    width={500}
                    className="object-cover w-full"
                  />
                  <div className="absolute">{image.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Id;
