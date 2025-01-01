import React, { useState } from "react";
import { IMAGES } from "../../../utils/Images";
import Rating from "../../../Components/Rating";
import DropDown from "../../../Components/DropDown";
import { PiCalendarDots } from "react-icons/pi";
import { TbChevronUp, TbChevronDown } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import RelatedCard from "../../../Components/cards/RelatedCard";
import Modal from "../../../Components/modal";
import InputDatePicker from "../../../Components/inputDatePicker/InputDatePicker";

const sortByOptions = ["A-Z", "Latest", "Low Price", "High Price"];

const initialServicesData = [
  {
    id: 1,
    category: "Makeup",
    name: "Sidal Makeup",
    image: IMAGES.MAKEUP,
    price: 399,
    isFavorite: false,
    defaultBrand: "Brand A",
    brands: ["Brand A", "Brand B", "Brand C"],
  },
  {
    id: 2,
    category: "Hair",
    name: "Luxury Hair Styling",
    image: IMAGES.MAKEUP,
    price: 499,
    discount: {
      type: "Price",
      price: 100,
      percentage: 20,
    },
    isFavorite: false,
    defaultBrand: "Brand D",
    brands: ["Brand D", "Brand E", "Brand F"],
  },
  {
    id: 3,
    category: "Nail",
    name: "Classic Manicure",
    image: IMAGES.MAKEUP,
    price: 150,
    isFavorite: false,
    defaultBrand: "Brand G",
    brands: ["Brand G", "Brand H", "Brand I"],
  },
  {
    id: 4,
    category: "Makeup",
    name: "Evening Glam",
    image: IMAGES.MAKEUP,
    price: 250,
    discount: {
      type: "Percentage",
      price: 500,
      percentage: 17,
    },
    isFavorite: false,
    defaultBrand: "Brand J",
    brands: ["Brand J", "Brand K", "Brand L"],
  },
  {
    id: 5,
    category: "Hair",
    name: "Bridal Hair Styling",
    image: IMAGES.MAKEUP,
    price: 700,
    discount: {
      type: "Price",
      price: 400,
      percentage: 42,
    },
    isFavorite: false,
    defaultBrand: "Brand M",
    brands: ["Brand M", "Brand N", "Brand O"],
  },
];

const handleDate = () => {};

export default function InnerPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const [time, setTime] = useState("14:30");

  const incrementTime = () => {
    setTime((prevTime) => adjustTime(prevTime, 1)); // Adjust by +1 minute
  };

  const decrementTime = () => {
    setTime((prevTime) => adjustTime(prevTime, -1)); // Adjust by -1 minute
  };

  // Function to adjust time
  const adjustTime = (currentTime, adjustment) => {
    const [hours, minutes] = currentTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes + adjustment;

    // Calculate new time in 24-hour format
    const newHours = Math.floor(((totalMinutes + 1440) % 1440) / 60);
    const newMinutes = (totalMinutes + 1440) % 60;

    return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <div className="bg-secondaryColor">
        <div className="md:container md:mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-9 flex flex-col md:flex-row gap-2">
              <div className="flex flex-row md:flex-col  gap-2 md:gap-4 p-2">
                <div
                  className="bg-center bg-cover bg-no-repeat h-[40px] md:h-[80px] w-[80px] mx-auto"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
                <div
                  className="bg-center bg-cover bg-no-repeat h-[40px] md:h-[80px] w-[80px] mx-auto"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
                <div
                  className="bg-center bg-cover bg-no-repeat h-[40px] md:h-[80px] w-[80px] mx-auto"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
                <div
                  className="bg-center bg-cover bg-no-repeat h-[40px] md:h-[80px] w-[80px] mx-auto"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
                <div
                  className="bg-center bg-cover bg-no-repeat h-[40px] md:h-[80px] w-[80px] mx-auto"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
                <div
                  className="bg-center bg-cover bg-no-repeat h-[40px] md:h-[80px] w-[80px] mx-auto"
                  style={{
                    backgroundImage: `url(${IMAGES.MAKEUP})`,
                  }}
                ></div>
              </div>
              <div className="flex w-10/12 md:w-5/12 md:p-2 mx-auto">
                <div className="p-2 shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)] border border-primaryColor/50 rounded-md w-full min-h-[250px] sm:min-h-[350px] md:h-full">
                  <div
                    className="bg-center bg-cover bg-no-repeat h-full w-full rounded-md"
                    style={{
                      backgroundImage: `url(${IMAGES.MAKEUP})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col w-11/12 md:w-6/12 p-2">
                <div className="pb-4 border-b border-primaryColor/50">
                  <h4 className="text-3xl text-primaryColor"> Peel off mask</h4>
                  <div className="text-xs text-whiteColor">
                    150 Product ratings
                  </div>
                  <div className="py-2">
                    <span className="text-sm text-primaryColor">10K </span>
                    <span className="text-xs text-primaryColor">
                      +brought this month
                    </span>
                  </div>

                  <button
                    className="border border-redColor bg-redColor w-[230px] text-whiteColor font-normal 
                        flex justify-center items-center px-3 py-1 rounded-md text-sm"
                  >
                    55% Discount
                  </button>
                </div>
                <div className="py-4 border-b border-primaryColor/50">
                  <h6 className="text-xl text-primaryColor"> ₹299.00</h6>

                  <div className="pt-1">
                    <span className="text-sm text-primaryColor">M.R.P </span>
                    <span className="text-xs text-whiteColor font-extralight ms-2">
                      ₹ 699
                    </span>
                  </div>
                </div>
                <div className="py-4 ">
                  <div className="text-sm text-primaryColor">Rating</div>
                  <div className="pt-1">
                    <Rating eatery={{ rating: 3 }} />
                  </div>
                </div>
                <div className="">
                  <div className="text-sm text-primaryColor pb-2">Brands *</div>
                  <DropDown
                    selectValue={sortByOptions}
                    className="w-full border
                  shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)] 
                   border-primaryColor/50 text-primaryColor 
                  bg-transparent font-medium py-2 text12 rounded-full outline-none mb-4 
                  px-2"
                  />
                  <DropDown
                    selectValue={sortByOptions}
                    className="w-full border
                  shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)]  
                   border-primaryColor/50 text-primaryColor 
                  bg-transparent font-medium py-2 text12 rounded-full outline-none mb-2 
                  px-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 mx-2">
              <div className="border my-2 rounded-md border-primaryColor/50 shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)] p-4 ">
                <h4 className="text-3xl text-primaryColor text-center mb-4">
                  Peel off mask
                </h4>
                <button
                  className="w-full border
                  shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)]  
                   border-primaryColor/50 text-primaryColor 
                  bg-transparent font-medium py-3 text12 rounded-full outline-none mb-4 flex items-center justify-between
                  px-8"
                  onClick={handleOpen}
                >
                  Select a Date <PiCalendarDots color="black" size={24} />
                </button>
                <button
                  className="w-full border mb-16
                  shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)]  
                   border-primaryColor/50 text-primaryColor 
                  bg-transparent font-medium py-2 text12 rounded-full outline-none flex items-center justify-between
                  px-8"
                >
                  {time}
                  <div className="flex flex-col">
                    <TbChevronUp
                      color="black"
                      size={16}
                      onClick={incrementTime}
                      className="cursor-pointer"
                    />
                    <TbChevronDown
                      color="black"
                      size={16}
                      onClick={decrementTime}
                      className="cursor-pointer"
                    />
                  </div>
                </button>
                <button
                  className="w-full border
                  shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)]  
                   border-primaryColor/50 text-primaryColor 
                  bg-transparent font-medium py-4 text12 rounded-full outline-none mb-4 flex items-center justify-between
                  px-8"
                >
                  Add To Cart
                </button>
                <button
                  className="w-full border
                  shadow-[3px_3px_5px_1px_rgba(0,0,0,0.1),_3px_3px_5px_1px_rgba(225,196,91,0.15)]  
                   border-primaryColor/50 text-primaryColor 
                  bg-transparent font-medium py-3 text12 rounded-full outline-none mb-4 flex items-center justify-between
                  px-8"
                >
                  Book Now <FaAngleRight color="black" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 mx-2">
            <h6 className="text-xl text-primaryColor my-4 me-auto">
              Additional Info section
            </h6>
            <div className="my-12">
              <h6 className="text-xl text-primaryColor mb-2 me-auto">
                Descripition
              </h6>
              <ul className="text-primaryColor list-disc marker:text-primaryColor list-inside text-sm">
                <li>Deeply cleanse and purify your skin.</li>
                <li>
                  Infused with natural ingredients like charcoal, aloe vera, and
                  green tea.
                </li>
                <li>
                  Removes dirt, oil, and impurities effectively with our Peel
                  Off Mask
                </li>
                <li>Leaves skin feeling refreshed and revitalized.</li>
                <li>
                  Minimizes pores, reduces blackheads, and improves skin
                  texture.
                </li>
                <li>Suitable for all skin types.</li>
                <li>Perfect for achieving a smooth and radiant complexion.</li>
                <li>
                  Provides an at-home spa experience for beautiful, glowing
                  skin.
                </li>
              </ul>
            </div>
            <div className="mb-16">
              <h6 className="text-xl text-primaryColor my-2 me-auto">Taxes</h6>
              <ul className="text-primaryColor list-none list-inside text-sm">
                <li>For Offline payment, the customer has to pay 18% GST.</li>
                <li>For Online payment, GST is excluded.</li>
              </ul>
              <h6 className="text-xl text-primaryColor my-2 me-auto">
                Refunds & Cancellations
              </h6>
              <ul className="text-primaryColor list-none list-inside text-sm">
                <li>
                  If you need to cancel more than 24 hours before your
                  appointment, just give us a call or shoot us a message letting
                  us know. 
                </li>
                <li>
                  Your refund amount will be transferred into your bank account
                  within 5-7 business days.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 mx-2">
            {initialServicesData?.map((service) => (
              <RelatedCard key={service.id} servicesData={service} />
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        title={
          <div className="flex gap-4 mb-2 text-lg text-primaryColor items-center">
            Select a Date <PiCalendarDots color="black" size={24} />
          </div>
        }
        footer={
          <div className="flex justify-end gap-2">
            <button
              className="border border-primaryColor/80 px-4 py-2 rounded bg-transparent text-primaryColor w-[100px]"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="bg-primaryColor text-black/90 font-medium px-4 py-2 rounded w-[100px]"
              onClick={() => alert("Action performed!")}
            >
              Add
            </button>
          </div>
        }
      >
        <div className="flex items-center justify-center">
          <InputDatePicker />
        </div>
      </Modal>
    </>
  );
}
