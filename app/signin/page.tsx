"use client";

import React, { useRef } from "react";

const Page = async () => {
  const id = useRef<HTMLInputElement>(null);
  const pw = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id.current || !pw.current) return;

    console.log(id.current.value, pw.current.value);
  };

  return (
    <div>
      <form>
        <input type="text" ref={id} />
        <input type="text" ref={pw} />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
};

export default Page;
