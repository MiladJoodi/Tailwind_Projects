import React from "react";
import Header from "../../Components/Header/Header";

function Forms() {
  return (
    <div className="content w-full">
      <Header />
      <div className="forms flex flex-col flex-wrap sm:flex-row w-full">
        <div className="container mx-auto p-4 sm:px-8 max-w-8xl">
          <div className="py-8">
            <div className="flex flex-col mb-1 sm:mb:0 justify-between w-full">
              <h2 className="text-2xl leading-tight">فرم ها</h2>

              <div className="bg-white w-full rounded-lg shadow sm:max-w-md sm:shadow-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                  <div className="relative ">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>

                    <div className="relative flex justify-center text-sm leading-5">
                      <span className="px-2 text-gray-500 bg-white">
                        فرم ثبت نام کاربران
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="w-full space-y-10">
                      <div className="w-full">
                        <div className="relative">
                          <label htmlFor="email" className="text-gray-700">
                            ایمیل
                            <span className="text-red-500 required-dot">*</span>
                          </label>
                          <input type="email" 
                          className="ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-300 text-base focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:outline-none" 
                          placeholder="ایمیل شما" />
                          <p className="absolute text-sm text-red-500 -bottom-6">
                            ایمیل شما نامعتبر است
                          </p>
                        </div>
                      </div>
                      <div className="w-full">
                          <div className="relative">
                              <label className="text-gray-700">
                                  نام
                              </label>
                              <input type="text" id="name"
                              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              />
                          </div>
                        </div>
            {/* buttons */}
                        <div className="">
                            <span className="block w-full rounded-md shadow-sm">
                              <button type="submit" className="py-2 px-4 bg-indigo-400 hover:bg-indigo-500 focus:ring-indigo-500 focus:ring-offset-indigo-500 text-white w-full transition ease-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">ثبت</button>
                            </span>
                        </div>
            {/* buttons */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
