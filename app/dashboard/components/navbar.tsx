"use client";

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface DashboardNavbarProps {
  currentUser?: User | null;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ currentUser }) => {
console.log(currentUser)

  return (
    <div>
      <div className="flex items-center justify-between">
        <Image
          src="/icon.png"
          alt=""
          width={2000}
          height={2000}
          className="object-contain h-20 w-auto"
        />
        {/* <h1 className="text-xl italic mb-20">Köksresan</h1> */}

        <button
          onClick={() => signOut()}
          className="bg-red-900 text-white p-2 rounded hover:bg-opacity-90"
        >
          Logga ut
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
