import React from "react";
import HeaderBlank from "../components/HeaderBlank";

const Login = () => {
  return (
    <>
      <HeaderBlank />
      <main>
        <section>
          <div className="container py-8">
            <h1 className="text-center text-xl font-semibold uppercase mb-3">
              Login
            </h1>
            <form>
              <div className="w-full max-w-[600px] bg-white mx-auto px-4 py-8 border border-gray-300 rounded">
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Email*
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Password*
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <button
                    type="submit"
                    disabled={false}
                    className="font-bold p-3 rounded bg-black text-white disabled:bg-gray-300 disabled:text-gray-400"
                  >
                    Login
                  </button>

                  <div>
                    <span className="font-semibold">New user signup?</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
