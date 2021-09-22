import React from "react";
import AddAddress from "../components/AddAddress";
import CryptoCard from "../components/CryptoCard";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-600 flex flex-col justify-start lg:px-40 md:px-12 px-0">
      <div className="flex justify-between">
        <div className="text-3xl p-5 text-gray-400 font-thin mb-6">
          Crypto DNS
        </div>
        <div>
          <AddAddress />
        </div>
      </div>

      <CryptoCard />
    </div>
  );
}
