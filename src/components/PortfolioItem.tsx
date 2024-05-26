const PortfolioItem = ({ name, price, change, link, color }: any) => (
  <div className="col-span-12 sm:col-span-6 md:col-span-3">
    <div className="flex flex-row bg-slate-600 shadow-sm rounded p-4">
      <div className="flex flex-col flex-grow ml-4">
        <div className="text-sm text-gray-500">
          <div className="col-span-12 lg:col-span-8">
            <a
              href={link}
              className={`inline-block rounded-full text-white text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 ${color}`}
            >
              {name}
            </a>
          </div>
        </div>
        <div className="font-bold text-lg">{price}</div>
        <span
          className={change.includes("▲") ? "text-red-500" : "text-blue-500"}
        >
          {change}
        </span>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
