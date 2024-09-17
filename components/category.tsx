"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";

interface categoryProps {
  label: string;
  image: string;
  selected?: boolean;
}

const Category: React.FC<categoryProps> = ({ label, image, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [params, label, router]);

  return (
    <div onClick={handleClick} className="flex flex-col items-center">
      <Image
        src={image}
        alt=""
        height={500}
        width={500}
        className={`w-24 h-24 object-cover rounded-full border-4 ${
          selected ? "border-red-800/40" : "border-transparent"
        }`}
      />
      <p className="text-center text-sm font-bold">{label}</p>
    </div>
  );
};

export default Category;
