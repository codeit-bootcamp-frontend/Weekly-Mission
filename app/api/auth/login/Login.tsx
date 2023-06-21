"use client";

import { useRef } from "react";

import { signIn } from "next-auth/react";

const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.current || !password.current) {
      return;
    }

    try {
      // 로그인 페이지는 signIn 함수를 사용하면 된다.
      const data = await signIn("credentials", {
        email: email.current.value,
        password: password.current.value,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={email} />
      <input type="password" ref={password} />
      <button>로그인</button>
    </form>
  );
};

export default Login;
