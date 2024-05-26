import React from "react";

const MarketData = () => {
  return (
    <div>
      <header className="flex-none flex bg-slate-900 text-gray-950 px-4 items-center">
        <button className="inline-block rounded-full text-blue-700 bg-blue-100 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
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
        <button className="inline-block rounded-full text-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
          Crypto
        </button>
      </header>
      <div className="flex items-center bg-slate-900 text-gray-950 ">
        <div className="p-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-slate-600 shadow-sm rounded p-4">
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">
                    <div className="col-span-12 lg:col-span-8">
                      <a
                        href="#"
                        className="inline-block rounded-full text-white text-xs font-bold"
                      >
                        Dow Jones
                      </a>
                    </div>
                  </div>
                  <div className="font-bold text-lg">31,097.97</div>
                  <span className="text-gray-500">- 0.00%</span>
                </div>
              </div>
            </div>
            {/* Repeat the similar structure for S&P 500 and NASDAQ */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-slate-600 shadow-sm rounded p-4">
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">
                    <div className="col-span-12 lg:col-span-8">
                      <a
                        href="#"
                        className="inline-block rounded-full text-white text-xs font-bold"
                      >
                        S&P 500
                      </a>
                    </div>
                  </div>
                  <div className="font-bold text-lg">3,824.68</div>
                  <span className="text-gray-500">- 0.00%</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-slate-600 shadow-sm rounded p-4">
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">
                    <div className="col-span-12 lg:col-span-8">
                      <a
                        href="#"
                        className="inline-block rounded-full text-white text-xs font-bold"
                      >
                        NASDAQ
                      </a>
                    </div>
                  </div>
                  <div className="font-bold text-lg">13,201.98</div>
                  <span className="text-red-500">▲ 1.03%</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-slate-300 shadow-sm rounded">
                <div
                  id="empty-cover-art"
                  className="py-3 h-full rounded sm:w-full text-center opacity-50 md:border-solid md:border-2 md:border-gray-400"
                >
                  <center>
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </center>
                  <div className="">See More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketData;
