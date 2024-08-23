"use client";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center">
      <div className="main-content z-10 flex flex-col items-center  bg-white border text-black border-gray-100/10 shadow-xl shadow-black/40 p-10 gap-5 rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold text-4xl tracking-tighter">Hi, Welcome back!</div>
          <div className="tracking-tighter text-xs text-black/80">Hope you&apos;re doing fine!</div>
        </div>
        <div className="bg-black/15 h-[1px] w-full"></div>
        <div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <input 
            className="border-2 rounded-full px-3 py-2 text-[14px] w-[250px] placeholder:text-xs border-gray-300 shadow-xl shadow-black/15 focus:border-black/30 focus:outline-none"
            type="email"
            placeholder="Enter your email"/>
            <input 
            className="border-2 rounded-full px-3 py-2 text-[14px] w-[250px] placeholder:text-xs border-gray-300 shadow-xl shadow-black/15 focus:border-black/30 focus:outline-none"
            type="password"
            placeholder="Password"/>
            <div className="tracking-tighter text-xs text-black/80">Forgot your password?&nbsp;&nbsp;&nbsp;
            <button className="text-blue-500 hover:scale-110 transition-all ease-in-out hover:animate-pulse">Click Here!</button>
            </div>
            <button
            className="bg-blue-500 border-2 border-blue-600 hover:bg-blue-600 text-white rounded-full px-3 py-2 text-[14px] h-[41px] w-[250px] shadow-xl transition-all ease-in-out duration-150 shadow-blue-500/40 "
            >Login</button>
            
            <div className="text-xs">or</div>
            <button className="border-2 border-black/15 h-[41px] w-[250px] py-2 rounded-full flex text-[14px] shadow-xl justify-center items-center gap-3 transition-all ease-in-out duration-150 bg-orange-500 border-orange-600 hover:bg-orange-600 hover:border-orange-600 text-white shadow-orange-500/40">
              Login with 
              <Image
              className="rounded-full"
              src="/google image.png"
              width={25}
              height={25}
              alt="Google Icon"
              />
            </button>
            <div className="tracking-tighter text-xs text-black/80">Don&apos;t have an account?&nbsp;&nbsp;&nbsp;
            <button className="text-orange-500 hover:scale-110 transition-all ease-in-out hover:animate-pulse">Sign up!</button>
            </div>
          </div>
        </div>
      </div>
      {/*Background Image*/}
      <Image
        src="/background2.png"
        fill={true}
        alt="Scenary"
        className="absolute inset-0 object-cover"
      />
    </div>
  );
}
