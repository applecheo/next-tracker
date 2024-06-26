"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="text-gray-100 bg-gray-950 body-font shadow w-full mt-2 mb-2">
    <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://www.freeiconspng.com/uploads/arrow-icon--myiconfinder-23.png"
          alt="logo"
          height={40}
          width={40}
        />
        <h1 className="text-lg font-bold">Next-Tracker</h1>
      </Link>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 relative">
        <input
          type="search"
          name="search"
          placeholder="Search for stock, ETF"
          className="bg-gray-800 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 56.966 56.966"
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
