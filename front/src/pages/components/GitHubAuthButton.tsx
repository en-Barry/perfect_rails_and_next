import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { auth } from "@/lib/firebase/initAuth";

const GitHubAuthButton: React.FC = () => {
  const router = useRouter();

  const handleGithubAuth = async () => {
    const provider = new GithubAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      console.error("GitHub認証に失敗しました:", error);
    }
  };

  return (
    <button
      type="button"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
      onClick={handleGithubAuth}
    >
      GitHubでログイン
    </button>
  );
};

export default GitHubAuthButton;
