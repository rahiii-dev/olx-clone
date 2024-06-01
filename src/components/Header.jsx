import { ChevronDown, Search, LocateFixed, MapPin, Plus, Check } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [locMenuActive, setLocMenuActive] = useState(false);
  const [langMenuActive, setLangMenuActive] = useState(false);

  function handleLocMenu() {
    setLocMenuActive(!locMenuActive);
  }

  function handleLangMenu() {
    setLangMenuActive(!langMenuActive);
  }

  return (
    <header className="bg-gray-100 sticky top-0 left-0 z-10 shadow-md">
      <div className="container py-3 flex gap-3 justify-between items-center">
        <div className="flex gap-4">
          <a href="">
            <Logo />
          </a>

          <div
            onClick={handleLocMenu}
            className={`h-[50px] relative hidden transition duration-200 cursor-pointer min-w-[250px] bg-white sm:flex justify-between items-center px-2 border-2 rounded focus:border-accent ${
              locMenuActive ? "border-accent" : "border-black"
            }`}
          >
            <div className="flex gap-4 items-center">
              <Search size={16} />
              <div className="place">India</div>
            </div>
            <ChevronDown
              size={38}
              absoluteStrokeWidth={true}
              className={`transition-all duration-500 ${
                locMenuActive ? "rotate-180" : ""
              }`}
            />

            <div
              className={`absolute top-[104%] left-0 shadow-lg bg-white w-full ${
                locMenuActive ? "" : "hidden"
              }`}
            >
              <div className="py-4">
                <div className="p-4 text-blue-500 flex items-center gap-3 transition-colors duration-300 ease-in-out hover:bg-teal-100">
                  <LocateFixed />
                  <div className="font-bold">Use current locatoion</div>
                </div>
              </div>
              <hr />
              <div>
                <h6 className="text-xs uppercase text-gray-400 p-4">
                  Popular Locations
                </h6>
                <Location location={"Kerala"}></Location>
                <Location location={"Tamil Nadu"}></Location>
                <Location location={"Maharashtra"}></Location>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-grow">
          <form className="hidden rounded overflow-hidden h-[50px] sm:flex items-start flex-grow">
            <input
              type="search"
              className="w-full h-[inherit] px-2 transition duration-200 border-2 border-r-0 border-black outline-none focus:border-accent"
              placeholder="Find Cars, Mmobile Phones and More..."
            />
            <button
              type="submit"
              className="h-[inherit] bg-black text-white px-3 py-4 flex justify-center items-center"
            >
              <Search />
            </button>
          </form>
          <div onClick={handleLangMenu} className="relative flex items-center cursor-pointer">
            <span className="uppercase font-bold text-sm">English</span>
            <ChevronDown
              size={38}
              absoluteStrokeWidth={true}
              className={`transition-all duration-500 ${
                langMenuActive ? "rotate-180" : ""
              }`}
            />

            <div className={`${langMenuActive ? '' : 'hidden'} min-w-[200px] absolute top-[150%] left-[50%] translate-x-[-50%] py-2 bg-white shadow-xl`}>
                <div className="px-4 py-5 flex justify-between items-center font-medium">
                    <span>English</span>
                    <Check/>
                </div>
                <div className="px-4 py-5 flex justify-between items-center font-medium">
                    <span>Hindi</span>
                </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a href="" className="underline-offset-4 underline font-bold">
            Login
          </a>
          <a href="" className="relative w-[104px] h-[48px] shadow-lg rounded-full">
            <svg className="absolute top-0 left-0" width="105" height="49" viewBox="0 0 1603 768">
              <g>
                <path
                  fill="#ffffff"
                  d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"
                ></path>
                <path
                  fill="#ffce32"
                  d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"
                ></path>
                <path
                  fill="#23e5db"
                  d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"
                ></path>
                <path
                  fill="#3a77ff"
                  d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"
                ></path>
              </g>
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex gap-1 justify-center items-center">
                <Plus size={20} strokeWidth={3}/>
                <span className="font-medium uppercase">Sell</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

function Location({ location }) {
  return (
    <button className="flex gap-3 p-4 transition-colors duration-300 ease-in-out hover:bg-teal-100 w-full">
      <MapPin />
      {location}
    </button>
  );
}

export default Header;
