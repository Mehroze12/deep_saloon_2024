import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import InputDatePicker from "../../Components/inputDatePicker/InputDatePicker";
import InputDayPicker from "../../Components/inputDayPicker/inputDayPicker";

export default function BookAppointment() {
  return (
    <div className="bg-secondaryColor">
      <div className="container mx-auto py-4">
        <button className="flex justify-center items-center gap-2 text-primaryColor border-none outline-none">
          <FaAngleLeft color="primary-color" size={16} /> Back
        </button>

        <div className="py-8 border-b border-primaryColor/50">
          <h4 className="text-3xl text-primaryColor pb-2">
            DOOR TO DOOR SALON SERVICE IN JABALPUR
          </h4>
          <div className="text-sm text-primaryColor">
            Check out our availability and book the date and time that works for
            you
          </div>
        </div>

        <div className="pt-2"></div>
        <span className="text-sm font-light text-primaryColor me-6">
          Filter by :
        </span>
        <span className="text-sm font-light text-primaryColor">
          Staff Member (All)
        </span>

        <div className="grid grid-cols-12 gap-4 py-8">
          <div className="col-span-12 lg:col-span-9 ">
            <div className="border-b border-primaryColor/50 flex justify-between w-full mt-4 pb-2">
              <div className="text-md font-semibold text-primaryColor">
                Select a Date and Time
              </div>
              <div className="hidden sm:block">
                <span className="text-sm font-light text-primaryColor me-2">
                  Timezone:
                </span>
                <span className="text-sm font-light text-primaryColor">
                  India Standard Time (IST)
                </span>
              </div>
            </div>
            <div className=" flex justify-between w-full mt-4">
              <InputDatePicker />
              <div className="hidden sm:block">
                <InputDayPicker />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9 ">
            <div className="border-b border-primaryColor/50 flex justify-between w-full mt-4 pb-2">
              <div className="block sm:hidden">
                <span className="text-sm font-light text-primaryColor me-2">
                  Timezone:
                </span>
                <span className="text-sm font-light text-primaryColor">
                  India Standard Time (IST)
                </span>
              </div>
            </div>
            <div className=" flex justify-between w-full mt-4">
              <div className="block sm:hidden">
                <InputDayPicker />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="px-4 py-2">
              <div className="mb-4 pb-2 border-b border-primaryColor">
                <div className="text-sm font-normal text-primaryColor">
                  Service Details
                </div>
                <div className="text-sm text-primaryColor py-2">
                  DOOR TO DOOR SALON SERVICE IN JABALPUR
                </div>
                <div className="text-md font-semibold pb-2 text-primaryColor">
                  S₹1,500 | Part of a plan
                </div>
              </div>
              <button
                className="w-full border border-primaryColor  text-blackColor 
                              bg-primaryColor font-medium py-3 text12 rounded-0 
                              outline-none mb-4 flex items-center justify-between text-center px-8"
              >
                Next!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
