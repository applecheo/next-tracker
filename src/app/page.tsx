import CompanyList from "@/components/CompanyList";
import Header from "@/components/Header";
import MarketList from "@/components/MarketList";
import MarketStatus from "@/components/MarketStatus";
import NewsSection from "@/components/NewsSection";
import PortfolioItem from "@/components/PortfolioItem";
import React from "react";

const fetchMarketDetail = async (params: any) => {
  const { page } = params;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
      {
        next: { revalidate: 60 },
      }
    );
    return response.json();
  } catch (error) {
    console.error("Error fetching market details:", error);
    throw error;
  }
};

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams?.["page"] ?? "1";
  const marketData = await fetchMarketDetail({ page });
  return (
    <div>
      <p className="flex h-10 items-center justify-center bg-lime-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Please note that the data is updated every minute
      </p>
      <Header />
      <header className="flex-none flex h-16 bg-slate-900 border-t border-gray-700 px-4 items-center">
        <h1 className="font-semibold text-lg">My Portfolio</h1>
      </header>

      <div className="flex items-center bg-slate-900 text-gray-950">
        <div className="p-4 w-full mb-5">
          <div className="grid grid-cols-12 gap-4">
            <PortfolioItem
              name="삼성전자"
              price="₩91,000.00"
              change="▲ 2.48%"
              changeColor="text-red-500"
              ticker="삼성전자"
              bgColor="bg-indigo-700"
              textColor="text-white"
            />
            <PortfolioItem
              name="Tesla Inc"
              price="$880.02"
              change="- 0.00%"
              changeColor="text-gray-500"
              ticker="Tesla"
              bgColor="bg-black"
              textColor="text-white"
            />
            <PortfolioItem
              name="KOSPI"
              price="3,148.45"
              change="▼ 0.12%"
              changeColor="text-blue-500"
              ticker="KOSPI"
              bgColor="ring-black ring-2"
              textColor="text-black"
            />
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-slate-300 shadow-sm rounded">
                <div
                  id="empty-cover-art"
                  className="py-5 h-full rounded sm:w-full text-center border-gray-700 opacity-50 md:border-solid md:border-2 md:border-gray-400"
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </center>
                  <div>Create New</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MarketList marketData={marketData} page={page} />

      <NewsSection />

      <MarketStatus />
      <CompanyList />
    </div>
  );
};

export default Home;
