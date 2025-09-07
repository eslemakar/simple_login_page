import React, { useState } from "react";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg ">
      {/* header title */}
      <div className="flex justify-center mb-4 ">
        <h2 className="text-3xl font-semibold text-center ">
          {isLoginMode ? "Login" : "Sign Up"}{" "}
        </h2>
      </div>

      {/* tab controls */}
      <div className="relative z-20 flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden ">
        <button
          onClick={() => setIsLoginMode(true)}
          className={`w-1/2 text-lg font-medium transition-all z-20 ${
            isLoginMode ? "text-white" : "text-black"
          } `}
        >
          Login
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={`w-1/2 font-medium transition-all relative z-20 ${
            !isLoginMode ? "text-white" : "text-black"
          }`}
        >
          Sign up
        </button>
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-pink-600 via-fuchsia-200 to-fuchsia-200 ${
            isLoginMode ? "left-0" : "left-1/2"
          }`}
        ></div>
      </div>
      {/* form section */}
      <form className="space-y-4">
        {!isLoginMode && <input type="text" placeholder="Name" required />}

        {/*  input field */}
        <input type="email" placeholder="Email address " required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-pink-900 placeholder-gray-400"/>
        <input type="password" placeholder="Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-pink-900 placeholder-gray-400" />

        {/* signup field */}

        {!isLoginMode && (
          <input type="password" placeholder="Confirm Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-pink-900 placeholder-gray-400" />
        )}

        {/* forget password */}

        {isLoginMode && (
          <div className="text-right">
            <p className="text-gray-500 font-semibold hover:underline">Forgot Password?</p>
          </div>
        )}
        {/* shared button */}
        <button className="w-full p-3 bg-gradient-to-r from-pink-600 via-fuchsia-300 to-fuchsia-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition ">{isLoginMode ? "Login" : "Sign Up"}</button>

        {/* switch link */}
        <p className="text-center text-gray-600">
          {" "}
          {isLoginMode ? "Dont you have an account?  " : "Already have an account? "}
          
          <a 
          href="#" onClick={() => setIsLoginMode(!isLoginMode)} className="text-pink-600 hover:underline gap-4">
            {isLoginMode ? " Sign Up " :  "Login"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
