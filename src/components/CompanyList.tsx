import React from "react";

const CompanyList = () => {
  return (
    <ul className="flex flex-col bg-slate-900  p-4">
      <li className="border-gray-400 flex flex-row mb-2">
        <div className="select-none cursor-pointer bg-slate-600 rounded-md flex flex-1 items-center p-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
          <div className="flex-1 pl-1 mr-16">
            <div className="font-medium">Company A</div>
            <div className="text-gray-600 text-sm">
              <a
                href="#"
                className="inline-block rounded-full text-white bg-yellow-700 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
              >
                COMPA
              </a>
            </div>
          </div>
          <div className="text-red-500">↑ 3.45%</div>
        </div>
      </li>
      <li className="border-gray-400 flex flex-row mb-2">
        <div className="select-none cursor-pointer bg-slate-600 rounded-md flex flex-1 items-center p-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
          <div className="flex-1 pl-1 mr-16">
            <div className="font-medium">Company B</div>
            <div className="text-gray-600 text-sm">
              <a
                href="#"
                className="inline-block rounded-full text-white bg-pink-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
              >
                COMPB
              </a>
            </div>
          </div>
          <div className="text-gray-500">- 0.0%</div>
        </div>
      </li>
      <li className="border-gray-400 flex flex-row mb-2">
        <div className="select-none cursor-pointer bg-slate-600 rounded-md flex flex-1 items-center p-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
          <div className="flex-1 pl-1 mr-16">
            <div className="font-medium">Company C</div>
            <div className="text-blue-500 text-sm">
              <a
                href="#"
                className="inline-block rounded-full text-white bg-blue-500 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
              >
                COMPC
              </a>
            </div>
          </div>
          <div className="text-blue-500">↓ 56.78%</div>
        </div>
      </li>
    </ul>
  );
};

export default CompanyList;
