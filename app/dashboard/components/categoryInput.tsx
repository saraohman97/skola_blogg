"use client";

import Image from "next/image";

interface CategoryInputProps {
  image: string;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  image,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex items-center gap-4 font-bold border-2 p-2 transition hover:border-neutral-800 cursor-pointer ${selected ? 'border-neutral-800' : 'border-neutral-300'}`}
    >
      <Image
        src={image}
        alt=""
        width={500}
        height={500}
        className="rounded-full h-14 w-14 object-cover"
      />
      {label}
    </div>
  );
};

export default CategoryInput;
