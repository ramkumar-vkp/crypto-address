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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <CryptoCard />
      </div>
    </div>
  );
}
