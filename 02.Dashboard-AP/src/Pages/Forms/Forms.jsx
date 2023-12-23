import React from "react";
import Header from "../../Components/Header/Header";

function Forms() {
  return (
    <div className="content w-full">
      <Header />
      <div className="forms flex flex-col flex-wrap sm:flex-row">
        <div className="container mx-auto p-4 sm:px-8 max-w-8xl">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb:0 justify-between w-full">
              <h2 className="text-2xl leading-tight">فرم ها</h2>

              <div className="bg-white rounded-lg shadow sm:max-w-md sm:shadow-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                  <div className="relative mt-6 ">
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
                        </div>
                      </div>
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
