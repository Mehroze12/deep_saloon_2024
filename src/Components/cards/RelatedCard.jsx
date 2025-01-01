import React from "react";
import { IMAGES } from "../../utils/Images";
import Button from "../Button";
import DropDown from "../DropDown";

function RelatedCard(props) {
  const { servicesData, toggleFavorite } = props;

  return (
    <>
      <div key={servicesData?.id} className="flex flex-col">
        <div
          className="bg-cover bg-no-repeat w-full h-[240px] relative"
          style={{ backgroundImage: `url(${servicesData?.image})` }}
        ></div>
        <div className="min-h-[90px] pt-2">
          <h3 className=" py-2 text12 text-primaryColor ">
            {servicesData?.name}
          </h3>

          {servicesData?.discount?.price && (
            <h5 className=" pb-1 text12  text-primaryColor">
              <strike>{servicesData?.price}$</strike>
            </h5>
          )}

          <h5 className=" pb-1 text12 text-primaryColor ">
            {servicesData?.discount?.price
              ? servicesData?.discount?.price
              : servicesData?.price}
            $
          </h5>
        </div>
      </div>
    </>
  );
}

export default RelatedCard;
