"use client";

import { categories } from "@/components/sidebar";
import CategoryInput from "./categoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";
import Input from "@/components/input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('')
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    // reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      title: "",
      text: "",
      imageSrc: "",
    },
  });

  const category = watch("category");
  const imageSrc = watch("imageSrc");
  // const title = watch("title");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  //npm i react-select
  // npm i next-cloudinary

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post("/api/posts", data)
    .then(() => {
        router.push('/');
    })
    .catch(() => {
        setMessage("Något gick fel.")
    })
    .finally(() => {
        setIsLoading(false)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-sm mx-auto">
      <h2 className="text-xl font-bold mb-10">Nytt post</h2>

      {/* Categories */}
      <label className="text-sm font-bold">Kategorier</label>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {categories.map((item) => (
          <CategoryInput
            key={item.label}
            onClick={(category) => setCustomValue("category", category)}
            selected={category === item.label}
            label={item.label}
            image={item.image}
          />
        ))}
      </div>

      {/* Title */}
      {/* <div className="mt-10 flex flex-col">
        <label className="text-sm font-bold">Titel</label>
        <input
          type="text"
          placeholder="Titel"
          className="border-2 outline-none border-neutral-300 p-2"
          onChange={(value) => setCustomValue("title", value)}
        />
      </div> */}

      {/* images */}
      <label className="text-sm font-bold">Bild</label>
      <ImageUpload
        value={imageSrc}
        onChange={(value) => setCustomValue("imageSrc", value)}
      />

      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="text"
        label="Text"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <div className="text-red-500">{message}</div>

      <button className="bg-red-800 text-white p-2 rounded mt-6" type="submit">Skapa post</button>
    </form>
  );
};

export default Form;
