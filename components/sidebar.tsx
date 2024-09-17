'use client'

import { usePathname, useSearchParams } from "next/navigation";
import Category from "./category";

export const categories = [
  {
    label: "Rätter",
    image: "/food.jpg",
  },
  {
    label: "Sommelier",
    image: "/wine.jpg",
  },
  {
    label: "Bakverk",
    image: "/konfektyr.jpg",
  },
  {
    label: "Högtider",
    image: "/christmas.jpg",
  },
  {
    label: "Skola",
    image: "/school.jpg",
  },
  {
    label: "Annat",
    image: "/other.jpg",
  },
];

const Sidebar = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              image={item.image}
              selected={category === item.label}
            />
          ))}
        </div>

        <h2 className="text-xl font-bold mb-3 mt-10">Innehållsförteckning</h2>
        <h3 className="text-lg">Kockskola</h3>
        <p className="text-sm hover:underline underline-offset-4 cursor-default w-fit">
          Skolstart
        </p>
      </div>
    </>
  );
};

export default Sidebar;
