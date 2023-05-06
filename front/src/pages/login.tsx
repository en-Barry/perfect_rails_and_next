/*
ログインページの作成
firebase authのGitHub認証を使う
*/

import Head from "next/head";
import Link from "next/link";
import Input from "./components/form/input";

const Login = () => {
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
        <form className="flex flex-col items-center justify-center w-full px-20 text-center">
          <label className="text-2xl mt-4  ">
            <Input type="text" placeholder="Email" />
          </label>
          <label className="text-2xl mt-4">
            <Input type="password" placeholder="Password" />
          </label>
          <button className="text-2xl mt-4">Login</button>
        </form>
        <p className="text-2xl mt-4">
          <Link href="/">Back to Top</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
