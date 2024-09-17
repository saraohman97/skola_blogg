import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="bg-[#FEFEFE] min-h-screen p-4">
      <div className="flex flex-col items-center">
        <Image
          src="/icon.png"
          alt=""
          width={2000}
          height={2000}
          className="object-contain h-20"
        />
        <h1 className="text-xl italic mb-20">Köksresan</h1>

        <label htmlFor="">Heading</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Dashboard;
