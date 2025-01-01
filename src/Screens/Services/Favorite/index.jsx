import React, { useState } from "react";
import TopHeader from "../../../Components/TopHeader";
import { IMAGES } from "../../../utils/Images";
import ServiceCard from "../../../Components/cards/ServiceCard";

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
  {
    id: 6,
    category: "Nail",
    name: "Gel Manicure",
    image: IMAGES.MAKEUP,
    price: 100,
    discount: {
      type: "Price",
      price: 50,
      percentage: 50,
    },
    isFavorite: false,
    defaultBrand: "Brand P",
    brands: ["Brand P", "Brand Q", "Brand R"],
  },
  {
    id: 7,
    category: "Makeup",
    name: "Daytime Look",
    image: IMAGES.MAKEUP,
    price: 180,
    isFavorite: false,
    defaultBrand: "Brand S",
    brands: ["Brand S", "Brand T", "Brand U"],
  },
  {
    id: 8,
    category: "Hair",
    name: "Curls and Waves",
    image: IMAGES.MAKEUP,
    price: 250,
    isFavorite: false,
    defaultBrand: "Brand V",
    brands: ["Brand V", "Brand W", "Brand X"],
  },
  {
    id: 9,
    category: "Nail",
    name: "French Manicure",
    image: IMAGES.MAKEUP,
    price: 120,
    discount: {
      type: "Price",
      price: 80,
      percentage: 33,
    },
    isFavorite: false,
    defaultBrand: "Brand Y",
    brands: ["Brand Y", "Brand Z", "Brand AA"],
  },

  {
    id: 30,
    category: "Nail",
    name: "Nail Repair",
    image: IMAGES.MAKEUP,
    price: 80,
    isFavorite: false,
    defaultBrand: "Brand JJJJ",
    brands: ["Brand JJJJ", "Brand KKKK", "Brand LLLL"],
  },
];

const Favorites = () => {
  const [servicesData, setServicesData] = useState(initialServicesData);

  const toggleFavorite = (id) => {
    const updatedServices = servicesData.map((service) =>
      service.id === id
        ? { ...service, isFavorite: !service.isFavorite }
        : service
    );
    setServicesData(updatedServices);
  };
  return (
    <div className="bg-secondaryColor">
      <TopHeader name="Favorites" />
      <div className="md:container mx-auto md:px-32">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 py-4">
          {servicesData.length > 0 ? (
            servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                servicesData={service}
                toggleFavorite={toggleFavorite}
              />
            ))
          ) : (
            <p>No favorite items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
