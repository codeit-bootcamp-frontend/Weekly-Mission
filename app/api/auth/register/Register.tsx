"use client";

import { useRef } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

const Register = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.current || !email.current || !password.current) {
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axios.post("/api/register", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      router.push("/api/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={name} />
      <input type="text" ref={email} />
      <input type="password" ref={password} />
      <button>등록하기</button>
    </form>
  );
};

export default Register;
