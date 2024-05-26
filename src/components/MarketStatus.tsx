// components/MarketStatus.tsx
import React from "react";
import Link from "next/link";

const MarketStatus = () => {
  return (
    <>
      <header className="flex-none flex h-16 bg-gray-900 border-t border-gray-700 px-4 items-center">
        <h1 className="font-semibold text-lg">Market Status</h1>
      </header>
      <header className="flex-none flex bg-gray-900 px-4 items-center">
        <Link href="#">
          <div className="inline-block rounded-full text-blue-700 bg-blue-100 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
            Hot
          </div>
        </Link>
        <Link href="#">
          <div className="inline-block rounded-full text-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
            Upside
          </div>
        </Link>
        <Link href="#">
          <div className="inline-block rounded-full text-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
            Downside
          </div>
        </Link>
      </header>
    </>
  );
};

export default MarketStatus;
