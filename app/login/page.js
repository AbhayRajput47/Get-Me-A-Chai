"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { registerUser } from "@/actions/useractions";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  useEffect(() => {
    if (session) router.push("/dashboard");
    document.title = "Login - Get Me A Chai";
  }, [session]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await signIn("credentials", {
  //     ...credentials,
  //     redirect: true,
  //     callbackUrl: "/dashboard",
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: credentials.username,
      password: credentials.password,
      redirect: false, // manual redirection
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };



  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 text-white">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Login/Signup to Get Started</h1>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
            Continue with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-white text-gray-800  font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.434c.6.112.82-.258.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.204.085 1.837 1.237 1.837 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.418-1.304.76-1.604-2.665-.305-5.467-1.333-5.467-5.932 0-1.31.468-2.381 1.236-3.22-.123-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 013.003-.404c1.02.004 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.649.242 2.872.12 3.176.77.839 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.922.43.37.814 1.101.814 2.22v3.293c0 .322.218.694.824.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="text-center text-sm text-white/50">or</div>

        {/* Username & Password Login */}
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md p-6 rounded-xl space-y-4 border border-white/10">
          <h2 className="text-lg font-semibold text-center text-white">Login with Username</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
