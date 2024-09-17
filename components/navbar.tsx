import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 bg-[#FEFEFE]">
      {/* <Image
        src="/bg.jpg"
        alt=""
        height={2000}
        width={2000}
        className="absolute inset-0 -z-10 object-cover h-full w-full"
        /> */}
        {/* <div className="absolute top-4 right-10 z-40 text-sm font-bold">Min portfolio</div> */}
      <div>
        {/* <div className="text-center mx-auto italic text-neutral-600 mt-16 border rounded-full p-4 w-20 h-20 flex items-center justify-center border-neutral-500">¶</div> */}
        <Image
          src="/icon.png"
          alt=""
          width={500}
          height={500}
          className="mx-auto h-40 object-contain mt-10"
        />
        {/* <div className="absolute top-4 left-4 italic text-neutral-600 border border-neutral-500 rounded-full p-4 w-20 h-20 flex items-center justify-center ">¶</div> */}

        <h1 className="text-3xl italic text-neutral-800 mb-3 text-center">
          Köksresan
        </h1>
        <p className="max-w-[600px] mx-auto text-neutral-600 leading-relaxed text-md text-center">
          Välkommen till köksresan. Här börjar min resa som kock novis. Här
          kommer jag skriva om kockskolan i Västerås, viner, rätter och
          bakverk.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
