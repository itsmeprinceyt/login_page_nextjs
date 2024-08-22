"use client";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center">
      <div className="main-content z-10 flex flex-col justify-around items-center h-[380px]  bg-white border text-black border-gray-100/10 shadow-xl shadow-black/40 p-10 gap-6 rounded-xl">
        hello
      </div>
      {/*Background Image*/}
      <Image
        src="/background2.png"
        fill={true}
        alt="Scenary"
        className="absolute inset-0 object-cover "
      />
    </div>
  );
}
