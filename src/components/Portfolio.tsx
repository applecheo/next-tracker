import PortfolioItem from "./PortfolioItem";

const Portfolio = () => (
  <div className="flex items-center bg-gray-100 text-gray-800">
    <div className="p-4 w-full">
      <div className="grid grid-cols-12 gap-4">
        <PortfolioItem
          name="삼성전자"
          price="₩91,000.00"
          change="▲ 2.48%"
          link="#"
          color="bg-indigo-700"
        />
        <PortfolioItem
          name="Tesla Inc"
          price="$880.02"
          change="- 0.00%"
          link="#"
          color="bg-black"
        />
        <PortfolioItem
          name="KOSPI"
          price="3,148.45"
          change="▼ 0.12%"
          link="#"
          color="ring-black ring-2"
        />
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <div className="flex flex-row bg-white shadow-sm rounded">
            <div
              id="empty-cover-art"
              className="py-5 h-full rounded border-gray-700 sm:w-full text-center opacity-50 md:border-solid md:border-2"
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
);

export default Portfolio;
