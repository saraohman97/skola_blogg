"use client";

import Input from "@/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
        ...data,
        redirect: false,
    })
    .then((callback) => {
        setIsLoading(false);

        if(callback?.ok) {
            router.push("dashboard")
            router.refresh()
        }

        if(callback?.error) {
            setMessage("Något gick fel.")
        }
    })
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

export default LoginPage;
