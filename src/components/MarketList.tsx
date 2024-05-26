/* eslint-disable @next/next/no-img-element */
import React from "react";
import Pagination from "./Pagination";
import { addCommas } from "@/utils/common";

const MarketList = ({ marketData }: any) => {
  return (
    <section className="relative bg-slate-900 text-gray-800 m-0 p-0">
      <div className="w-full">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-gray-950">
          <div className="mb-0 px-4 py-3 border-0 bg-slate-900 border-t border-gray-700">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-1 max-w-full flex-grow flex-1 ">
                <h3 className="font-semibold text-lg text-white mb-5">
                  Market List
                </h3>
              </div>
              <header className="flex-none flex bg-slate-900 text-gray-950 px-5 items-center">
                <button className="inline-block rounded-full text-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                  United States
                </button>
                <button className="inline-block rounded-full text-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                  Asia
                </button>
                <button className="inline-block rounded-full text-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                  Europe
                </button>
                <button className="inline-block rounded-full text-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                  Currency
                </button>
                <button className="inline-block rounded-full text-blue-700 bg-blue-100 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                  Crypto
                </button>
              </header>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse ">
              <thead>
                <tr>
                  <th className="pl-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-700 text-white border-gray-700">
                    #
                  </th>
                  <th className="pr-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-700 text-white border-gray-700">
                    Name
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right bg-gray-700 text-white border-gray-700">
                    Price
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right bg-gray-700 text-white border-gray-700">
                    24h%
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right bg-gray-700 text-white border-gray-700">
                    Market Cap
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-gray-700 text-white border-gray-700">
                    Total Volume
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right bg-gray-700 text-white border-gray-700">
                    Last 7 Days
                  </th>
                </tr>
              </thead>
              <tbody>
                {marketData &&
                  marketData.map((security: any) => {
                    const {
                      name,
                      current_price,
                      market_cap_rank,
                      image,
                      price_change_percentage_24h,
                      market_cap_change_percentage_24h,
                      total_volume,
                    } = security;
                    return (
                      <tr
                        key={security.id}
                        className="border-t border-gray-700"
                      >
                        <td className=" pl-6 border-t-0 align-middle border-l-0 border-r-0 text-xs uppercase text-left whitespace-nowrap p-4 font-semibold text-white">
                          {market_cap_rank}
                        </td>
                        <th className="border-t-0 pr-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pl-0 text-left flex items-center">
                          <img
                            src={`${image}`}
                            className="h-7 w-7 bg-white rounded-full border"
                            alt="..."
                          />
                          <span className="ml-3 font-bold text-white">
                            {name}
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-right text-xs whitespace-nowrap p-4 font-semibold text-white">
                          {`$${addCommas(current_price)} USD`}
                        </td>
                        <td
                          className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-right text-xs whitespace-nowrap p-4 font-semibold ${
                            price_change_percentage_24h > 0
                              ? "text-green-500"
                              : price_change_percentage_24h < 0
                              ? "text-red-500"
                              : "text-gray-500"
                          }`}
                        >
                          {`${price_change_percentage_24h}% ${
                            price_change_percentage_24h > 0
                              ? "↑"
                              : price_change_percentage_24h < 0
                              ? "↓"
                              : "-"
                          }`}
                        </td>
                        <td
                          className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-right text-xs whitespace-nowrap p-4 font-semibold ${
                            market_cap_change_percentage_24h > 0
                              ? "text-green-500"
                              : price_change_percentage_24h < 0
                              ? "text-red-500"
                              : "text-gray-500"
                          }`}
                        >
                          {`${market_cap_change_percentage_24h}% ${
                            market_cap_change_percentage_24h > 0
                              ? "↑"
                              : market_cap_change_percentage_24h < 0
                              ? "↓"
                              : "-"
                          }`}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs whitespace-nowrap p-4 font-semibold text-white">
                          ${addCommas(total_volume)}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-right text-xs whitespace-nowrap p-4 font-semibold text-white">
                          Chart
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container mx-auto pt-6 pb-8 mt-6 bg-slate-900">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default MarketList;
