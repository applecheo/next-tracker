// components/MostFollowed.tsx
import React from "react";
import Link from "next/link";

type MostFollowedProps = {
  name: string;
  followers: string;
  ticker: string;
  bgColor: string;
};

const MostFollowed: React.FC<MostFollowedProps> = ({
  name,
  followers,
  ticker,
  bgColor,
}) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
      <div className="flex flex-row bg-slate-600 shadow-sm rounded p-4">
        <div className="flex flex-col flex-grow ml-4">
          <div className="text-sm text-gray-500">
            <Link href="#">
              <div
                className={`inline-block rounded-full text-white ${bgColor} text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1`}
              >
                {ticker}
              </div>
            </Link>
          </div>
          <div className="font-bold text-lg">{followers}</div>
          <div className="text-gray-300 text-sm">Followers</div>
        </div>
      </div>
    </div>
  );
};

export default MostFollowed;
