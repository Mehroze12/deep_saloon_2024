import React from "react";
import { IMAGES } from "../../utils/Images";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
  return (
    <div className="bg-secondaryColor min-h-[100vh]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 py-12">
          <div className="col-span-8">
            <h6 className="text-xl text-whiteColor capitalize mb-2">
              {" "}
              Cart Items
            </h6>
            <div className="border border-whiteColor/40 px-4 py-4 rounded-md flex flex-col gap-4 ">
              <div className="flex justify-between gap-6 items-center ">
                <div
                  className="bg-center bg-cover bg-no-repeat h-[80px] w-[80px]"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
                <div className="flex flex-col">
                  <div className="text-md text-whiteColor">
                    Pemanent Hair
                    <br />
                    Extensions
                  </div>
                  <div className="text-sm text-whiteColor font-extralight">
                    Hair Type: Straight
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-md text-whiteColor">1</div>
                  <div className="flex flex-col my-auto">
                    <FaCaretUp color="white" size={16} />
                    <FaCaretDown color="white" size={16} />
                  </div>
                </div>

                <div className="text-sm text-primaryColor">$391</div>

                <RiDeleteBin6Line color="white" size={24} />
              </div>
              <div className="flex justify-between gap-6 items-center ">
                <div
                  className="bg-center bg-cover bg-no-repeat h-[80px] w-[80px]"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
                <div className="flex flex-col">
                  <div className="text-md text-whiteColor">
                    Pemanent Hair
                    <br />
                    Extensions
                  </div>
                  <div className="text-sm text-whiteColor font-extralight">
                    Hair Type: Straight
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-md text-whiteColor">1</div>
                  <div className="flex flex-col my-auto">
                    <FaCaretUp color="white" size={16} />
                    <FaCaretDown color="white" size={16} />
                  </div>
                </div>

                <div className="text-sm text-primaryColor">$391</div>

                <RiDeleteBin6Line color="white" size={24} />
              </div>
            </div>
            <h6 className="text-md text-primaryColor underline capitalize my-2">
              {" "}
              Continue Browsing
            </h6>
          </div>
          <div className="col-span-4"></div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="mb-4">
            <h6 className="text-xl text-whiteColor my-3 me-auto">Taxes</h6>
            <ul className="text-whiteColor text-sm list-disc marker:text-whiteColor list-inside">
              <li className="mb-1">
                For Offline payment, the customer has to pay 18% GST.
              </li>
              <li className="mb-1">For Online payment, GST is excluded.</li>
            </ul>
            <h6 className="text-xl text-whiteColor my-3 me-auto">
              Refunds & Cancellations
            </h6>
            <ul className="text-whiteColor text-sm list-disc marker:text-whiteColor list-inside">
              <li className="mb-1">
                If you need to cancel more than 24 hours before your
                appointment, just give us a call or shoot us a message letting
                us know. 
              </li>
              <li className="mb-1">
                Your refund amount will be transferred into your bank account
                within 5-7 business days.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
