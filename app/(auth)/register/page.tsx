"use client";

import Input from "@/components/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post(`/api/register`, data)
      .then(() => {
        setMessage("Användare skapad!");
        router.push("/dashboard")
      })
      .catch((error) => {
        console.log(error);
        setMessage("Något gick fel.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-xl mx-auto">
      <h1 className="pt-10 text-xl font-bold">Register</h1>
      <p className="font-light text-neutral-500">
        Registrera din användare här
      </p>

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />

      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
      <div className="text-rose-400">{message}</div>

      <button
        type="submit"
        className="bg-rose-500 text-white p-2 rounded mt-6 hover:bg-opacity-90"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterPage;
