/* eslint-disable react/no-unescaped-entities */
const NewsSection = () => (
  <div
    className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
    style={{
      backgroundImage:
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJPlSKDyfGg_WEpda49DZyo_fSKrdmxoIaqosNxD_luNQ0QaDKRqnU6CWEB8')",
    }}
  >
    <div className="md:w-1/2">
      <p className="font-bold text-sm uppercase">
        FINANCE NEWS -{" "}
        <a
          href="#"
          className="inline-block rounded-full text-black ring-black ring-2 text-xs font-bold bg-white mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
        >
          Nifty_50
        </a>
      </p>
      <p className="text-lg font-bold">
        Traders' Guide: Nifty has to hold above 14,300 level to witness fresh
        rally
      </p>
      <p className="text-sm mb-10 leading-none">
        The Economic Times - 29min ago
      </p>
    </div>
  </div>
);

export default NewsSection;
