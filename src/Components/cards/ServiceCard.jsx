import React from "react";
import { IMAGES } from "../../utils/Images";
import Button from "../Button";
import DropDown from "../DropDown";

function ServiceCard(props) {
  const { servicesData, toggleFavorite } = props;

  return (
    <>
      <div key={servicesData?.id} className="flex flex-col">
        <div
          className="bg-cover bg-no-repeat w-full h-[200px] relative"
          style={{ backgroundImage: `url(${servicesData?.image})` }}
        >
          <div
            className="absolute right-1 top-1 bg-secondaryColor p-2 rounded-full"
            onClick={() => toggleFavorite(servicesData?.id)}
          >
            {servicesData?.isFavorite ? (
              <img src={IMAGES.HARDICON} className="h-[20px]" alt="Favorited" />
            ) : (
              <img
                src={IMAGES.HARDBORDERICON}
                className="h-[20px]"
                alt="Not Favorited"
              />
            )}
          </div>

          {servicesData?.discount?.percentage && (
            <div className="absolute left-0 top-0 bg-redColor px-2 py-1 text12 text-whiteColor shadow">
              {servicesData?.discount?.percentage}% Discount
            </div>
          )}
        </div>
        <div className="min-h-[90px] pt-2">
          <h3 className="px-2 py-2 text12 text-primaryColor text-center">
            {servicesData?.name}
          </h3>
          <h5 className="px-2 pb-1 text12 text-whiteColor text-center">
            {servicesData?.discount?.price
              ? servicesData?.discount?.price
              : servicesData?.price}
            $
          </h5>
          {servicesData?.discount?.price && (
            <h5 className="px-2 pb-1 text12 text-center text-redColor/70">
              <strike>{servicesData?.price}$</strike>
            </h5>
          )}
        </div>

        {servicesData?.brands && servicesData?.brands.length > 0 && (
          <DropDown selectValue={servicesData?.brands} />
        )}

        <Button
          divstyle="w-full border border-primaryColor text-primaryColor bg-transparent font-medium py-2 text12 rounded-full"
          btnname="Sort by"
        />
      </div>
    </>
  );
}

export default ServiceCard;
