/*
ログインページの作成
firebase authのGitHub認証を使う
*/

import { signInWithEmailAndPassword } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth } from "../lib/firebase/initAuth";
import Input from "./components/form/input";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError((err as Error).message);
      alert("ログインに失敗しました。メールアドレスとパスワードを確認してください。");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a href="https://nextjs.org">Login</a>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full px-20 text-center"
        >
          <label className="text-2xl mt-4  ">
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-2xl mt-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="text-2xl mt-4">Login</button>
        </form>
        {error && <p>{error}</p>}
        <p className="text-2xl mt-4">
          <Link href="/">Back to Top</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
