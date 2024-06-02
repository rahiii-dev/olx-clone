import {Camera } from "lucide-react";
import HeaderBlank from "../components/HeaderBlank";

const SellItem = () => {
  return (
    <>
      <HeaderBlank/>
      <main>
        <section>
          <div className="container py-8">
            <h1 className="text-center text-xl font-semibold uppercase mb-3">
              Post Your Add
            </h1>
            <form>
              <div className="w-full max-w-[600px] bg-white mx-auto px-4 py-8 border border-gray-300 rounded">
                <div className="mb-3">
                  <label
                    htmlFor="title"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Title*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="price"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Price*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded border-0 p-2 outline-none
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="state"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    State*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="city"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    City*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="text-lg font-semibold mb-2">Upload Photo</h2>
                  <div className="relative size-32 border-2 border-gray-300 rounded transition-colors duration-300 hover:border-black">
                    <label htmlFor="image-1" className="text-gray-300 flex flex-col justify-center items-center
                        w-full h-full cursor-pointer transition-colors duration-300 hover:text-black">
                        <Camera size={32} />
                        <span className="text-nowrap">Add Photo</span>
                    </label>
                    <input
                      type="file"
                      name="image-1"
                      id="image-1"
                      className="sr-only"
                    />
                  </div>
                </div>

                <div>
                    <button type="submit" disabled={false} className="font-bold p-3 rounded bg-black text-white disabled:bg-gray-300 disabled:text-gray-400">Post Now</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SellItem;
