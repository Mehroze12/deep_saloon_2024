import React, { useRef, useState } from "react";
import TopHeader from "../../../Components/TopHeader";
import { FiMinus, FiPlus } from "react-icons/fi";
import ServiceCard from "../../../Components/cards/ServiceCard";
import Pagination from "../../../Components/Pagination";
import { IMAGES } from "../../../utils/Images";
import DropDown from "../../../Components/DropDown";
import { IoCloseSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const categories = [
  "All",
  "Manicure",
  "Pedicure",
  "Related Services",
  "Facials",
];

const sortByOptions = ["A-Z", "Latest", "Low Price", "High Price"];

const filters = [
  {
    label: "Price",
    options: ["0-100", "100-500", "500-1000"],
  },
  {
    label: "Brand",
    options: ["Brand A", "Brand B", "Brand C"],
  },
  {
    label: "Brands",
    options: ["Brand A", "Brand B", "Brand C"],
  },
  {
    label: "Select",
    options: ["0-100", "Brand B", "Type Z"],
  },
  {
    label: "Type",
    options: ["Type X", "Type Y", "Type Z"],
  },
  {
    label: "Volume",
    options: ["Small", "Medium", "Large"],
  },
];

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
    id: 10,
    category: "Makeup",
    name: "Natural Glow",
    image: IMAGES.MAKEUP,
    price: 220,
    isFavorite: false,
    defaultBrand: "Brand BB",
    brands: ["Brand BB", "Brand CC", "Brand DD"],
  },
  {
    id: 11,
    category: "Hair",
    name: "Hair Treatment",
    image: IMAGES.MAKEUP,
    price: 350,
    isFavorite: false,
    defaultBrand: "Brand EE",
    brands: ["Brand EE", "Brand FF", "Brand GG"],
  },
  {
    id: 12,
    category: "Nail",
    name: "Pedicure",
    image: IMAGES.MAKEUP,
    price: 90,
    discount: {
      type: "Percentage",
      price: 70,
      percentage: 22,
    },
    isFavorite: false,
    defaultBrand: "Brand HH",
    brands: ["Brand HH", "Brand II", "Brand JJ"],
  },
  {
    id: 13,
    category: "Makeup",
    name: "Bold Look",
    image: IMAGES.MAKEUP,
    price: 300,
    isFavorite: false,
    defaultBrand: "Brand KK",
    brands: ["Brand KK", "Brand LL", "Brand MM"],
  },
  {
    id: 14,
    category: "Hair",
    name: "Short Hair Cut",
    image: IMAGES.MAKEUP,
    price: 100,
    isFavorite: false,
    defaultBrand: "Brand NN",
    brands: ["Brand NN", "Brand OO", "Brand PP"],
  },
  {
    id: 15,
    category: "Nail",
    name: "Shellac Manicure",
    image: IMAGES.MAKEUP,
    price: 180,
    isFavorite: false,
    defaultBrand: "Brand QQ",
    brands: ["Brand QQ", "Brand RR", "Brand SS"],
  },
  {
    id: 16,
    category: "Makeup",
    name: "Smokey Eyes",
    image: IMAGES.MAKEUP,
    price: 250,
    discount: {
      type: "Price",
      price: 200,
      percentage: 20,
    },
    isFavorite: false,
    defaultBrand: "Brand TT",
    brands: ["Brand TT", "Brand UU", "Brand VV"],
  },
  {
    id: 17,
    category: "Hair",
    name: "Straightening",
    image: IMAGES.MAKEUP,
    price: 400,
    isFavorite: false,
    defaultBrand: "Brand WW",
    brands: ["Brand WW", "Brand XX", "Brand YY"],
  },
  {
    id: 18,
    category: "Nail",
    name: "Nail Art",
    image: IMAGES.MAKEUP,
    price: 200,
    discount: {
      type: "Price",
      price: 150,
      percentage: 25,
    },
    isFavorite: false,
    defaultBrand: "Brand ZZ",
    brands: ["Brand ZZ", "Brand AAA", "Brand BBB"],
  },
  {
    id: 19,
    category: "Makeup",
    name: "Contouring",
    image: IMAGES.MAKEUP,
    price: 220,
    discount: {
      type: "Price",
      price: 180,
      percentage: 18,
    },
    isFavorite: false,
    defaultBrand: "Brand CCC",
    brands: ["Brand CCC", "Brand DDD", "Brand EEE"],
  },
  {
    id: 20,
    category: "Hair",
    name: "Blow Dry",
    image: IMAGES.MAKEUP,
    price: 180,
    discount: {
      type: "Price",
      price: 140,
      percentage: 22,
    },
    isFavorite: false,
    defaultBrand: "Brand FFF",
    brands: ["Brand FFF", "Brand GGG", "Brand HHH"],
  },
  {
    id: 21,
    category: "Nail",
    name: "Acrylic Nails",
    image: IMAGES.MAKEUP,
    price: 230,
    discount: {
      type: "Percentage",
      price: 190,
      percentage: 17,
    },
    isFavorite: false,
    defaultBrand: "Brand III",
    brands: ["Brand III", "Brand JJJ", "Brand KKK"],
  },
  {
    id: 22,
    category: "Makeup",
    name: "Makeup Tutorial",
    image: IMAGES.MAKEUP,
    price: 150,
    discount: {
      type: "Price",
      price: 120,
      percentage: 20,
    },
    isFavorite: false,
    defaultBrand: "Brand LLL",
    brands: ["Brand LLL", "Brand MMM", "Brand NNN"],
  },
  {
    id: 23,
    category: "Hair",
    name: "Hair Coloring",
    image: IMAGES.MAKEUP,
    price: 350,
    discount: {
      type: "Percentage",
      price: 300,
      percentage: 15,
    },
    isFavorite: false,
    defaultBrand: "Brand OOO",
    brands: ["Brand OOO", "Brand PPP", "Brand QQQ"],
  },
  {
    id: 24,
    category: "Nail",
    name: "Dip Powder Nails",
    image: IMAGES.MAKEUP,
    price: 200,
    discount: {
      type: "Price",
      price: 150,
      percentage: 25,
    },
    isFavorite: false,
    defaultBrand: "Brand RRR",
    brands: ["Brand RRR", "Brand SSS", "Brand TTT"],
  },
  {
    id: 25,
    category: "Makeup",
    name: "Airbrush Makeup",
    image: IMAGES.MAKEUP,
    price: 450,
    discount: {
      type: "Price",
      price: 350,
      percentage: 22,
    },
    isFavorite: false,
    defaultBrand: "Brand UUU",
    brands: ["Brand UUU", "Brand VVV", "Brand WWW"],
  },
  {
    id: 26,
    category: "Hair",
    name: "Hair Extensions",
    image: IMAGES.MAKEUP,
    price: 600,
    isFavorite: false,
    defaultBrand: "Brand XXX",
    brands: ["Brand XXX", "Brand YYY", "Brand ZZZ"],
  },
  {
    id: 27,
    category: "Nail",
    name: "Nail Polish Change",
    image: IMAGES.MAKEUP,
    price: 50,
    discount: {
      type: "Price",
      price: 40,
      percentage: 20,
    },
    isFavorite: false,
    defaultBrand: "Brand AAAA",
    brands: ["Brand AAAA", "Brand BBBB", "Brand CCCC"],
  },
  {
    id: 28,
    category: "Makeup",
    name: "HD Makeup",
    image: IMAGES.MAKEUP,
    price: 600,
    isFavorite: false,
    defaultBrand: "Brand DDDD",
    brands: ["Brand DDDD", "Brand EEEE", "Brand FFFF"],
  },
  {
    id: 29,
    category: "Hair",
    name: "Hair Spa",
    image: IMAGES.MAKEUP,
    price: 250,
    isFavorite: false,
    defaultBrand: "Brand GGGG",
    brands: ["Brand GGGG", "Brand HHHH", "Brand IIII"],
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

const itemsPerPage = 6;

export default function HairCare() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [servicesData, setServicesData] = useState(initialServicesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFavorite = (id) => {
    const updatedServices = servicesData.map((service) =>
      service.id === id
        ? { ...service, isFavorite: !service.isFavorite }
        : service
    );
    setServicesData(updatedServices);
  };

  // Apply filters to services data
  const filteredServices = servicesData.filter((service) => {
    let matchesPrice = true;
    let matchesBrand = true;
    let matchesBrands = true;
    let matchesCategory = true;

    if (selectedCategory && selectedCategory !== "All") {
      matchesCategory = service?.category === selectedCategory;
    }

    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split("-").map(Number);
      matchesPrice = service?.price >= minPrice && service?.price <= maxPrice;
    }

    if (selectedBrand) {
      matchesBrand = service?.defaultBrand === selectedBrand;
    }

    if (selectedBrands) {
      matchesBrands = service?.brands?.includes(selectedBrands);
    }

    return matchesPrice && matchesBrand && matchesBrands && matchesCategory;
  });

  // Apply sorting after filtering
  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === "A-Z") return a.name.localeCompare(b.name);
    if (sortBy === "Latest") return b.id - a.id; // Assuming higher ID is more recent
    if (sortBy === "Low Price") return a.price - b.price;
    if (sortBy === "High Price") return b.price - a.price;
    return 0; // No sorting
  });

  // Calculate total pages after filtering and sorting
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);

  // Calculate paginated data after filtering and sorting
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedServices.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterToggle = (index) => {
    setOpenFilter((prev) => (prev === index ? null : index));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page
    setMenuOpen(false);
  };

  const handlePriceFilter = (price) => {
    setSelectedPrice(price);
    setSelectedBrand(null);
    setSelectedBrands(null);
    setCurrentPage(1);
    setMenuOpen(false);
  };

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    setSelectedPrice(null);
    setSelectedBrands(null);
    setCurrentPage(1);
    setMenuOpen(false);
  };

  const handleBrandsFilter = (brands) => {
    setSelectedBrands(brands);
    setSelectedBrand(null);
    setSelectedPrice(null);
    setCurrentPage(1);
    setMenuOpen(false);
  };

  const handleSortByChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1); // Reset to first page on sort change
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-secondaryColor">
        <TopHeader name="Hair Care" />
        <div className="md:container mx-auto">
          <div className="flex justify-between md:justify-end w-full px-2 md:px-0 gap-4">
            <button onClick={handleMenuOpen} className="block md:hidden">
              <MdMenu size={24} color="#e1c45b" />
            </button>
            <div className="w-[270px] md:ms-auto">
              <DropDown
                selectValue={sortByOptions}
                onSelect={handleSortByChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 py-6 sm:py-8 md:py-12">
            <div className="hidden md:block md:col-span-4 xl:col-span-3">
              <h3 className="text5 font-normal text-primaryColor border-b border-gray px-2 pb-4">
                Filter by
              </h3>
              {/* Dynamic Categories */}
              <div>
                <h5 className="text8 font-normal text-primaryColor p-2">
                  Category
                </h5>
                {categories.map((category, index) => (
                  <h6
                    key={index}
                    className={`text12 font-normal px-2 pb-2 cursor-pointer ${
                      selectedCategory === category
                        ? "text-white"
                        : "text-primaryColor"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </h6>
                ))}
              </div>

              {/* Dynamic Filters */}
              {filters.map((filter, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-gray cursor-pointer "
                >
                  {/* Filter Header */}
                  <div
                    className="px-2 pb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleFilterToggle(index)}
                  >
                    <h6 className="text10 font-normal text-primaryColor">
                      {filter.label}
                    </h6>
                    {openFilter === index ? (
                      <FiMinus size={24} color="#000" />
                    ) : (
                      <FiPlus size={24} color="#000" />
                    )}
                  </div>

                  {/* Filter Options */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFilter === index
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex gap-4 mt-2 flex-wrap">
                      {filter.options.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          className="border border-borderColor/40 text-primaryColor/40 font-normal 
                        flex justify-center items-center px-3 py-1 rounded-full text-xs 
                        hover:border-primaryColor/40 hover:bg-primaryColor/40 hover:text-whiteColor/40
                        focus:border-primaryColor/90 focus:bg-primaryColor/90 focus:text-whiteColor"
                          onClick={() => {
                            if (filter?.label === "Price") {
                              handlePriceFilter(item);
                            } else if (filter?.label === "Brand") {
                              handleBrandFilter(item);
                            } else if (filter?.label === "Brands") {
                              handleBrandsFilter(item);
                            }
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" col-span-12 md:col-span-8 xl:col-span-9">
              <div className="grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 px-2 md:px-0">
                {paginatedData?.map((service) => (
                  <ServiceCard
                    key={service.id}
                    servicesData={service}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
              {/* Remove pagination if any filter is applied */}
              {!(selectedPrice || selectedBrands || selectedBrand) && (
                <div className="flex justify-end">
                  <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="static-modal"
          className="fixed top-0 right-0 left-0  flex justify-center items-center w-full h-full bg-slate-50 bg-opacity-5 backdrop-blur-sm"
        >
          <div className="w-full max-h-full " ref={menuRef}>
            <div className="bg-tranparent px-8 shadow-md border min-h-[100vh] z-0 flex flex-col justify-center relative">
              <div className="absolute top-0 bottom-0 left-0 w-[310px] bg-secondaryColor">
                <h3 className="text5 font-normal text-primaryColor border-b border-gray px-2 pb-4">
                  Filter by
                </h3>
                {/* Dynamic Categories */}
                <div>
                  <h5 className="text8 font-normal text-primaryColor p-2">
                    Category
                  </h5>
                  {categories.map((category, index) => (
                    <h6
                      key={index}
                      className={`text12 font-normal px-2 pb-2 cursor-pointer ${
                        selectedCategory === category
                          ? "text-white"
                          : "text-primaryColor"
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </h6>
                  ))}
                </div>

                {/* Dynamic Filters */}
                {filters.map((filter, index) => (
                  <div
                    key={index}
                    className="py-2 border-b border-gray cursor-pointer "
                  >
                    {/* Filter Header */}
                    <div
                      className="px-2 pb-0 flex justify-between items-center cursor-pointer"
                      onClick={() => handleFilterToggle(index)}
                    >
                      <h6 className="text10 font-normal text-primaryColor">
                        {filter.label}
                      </h6>
                      {openFilter === index ? (
                        <FiMinus size={24} color="#000" />
                      ) : (
                        <FiPlus size={24} color="#000" />
                      )}
                    </div>

                    {/* Filter Options */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFilter === index
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex gap-4 mt-2 ">
                        {filter.options.map((item, itemIndex) => (
                          <button
                            key={itemIndex}
                            className="border border-borderColor/40 text-primaryColor/40 font-normal 
                        flex justify-center items-center px-3 py-1 rounded-full text-xs 
                        hover:border-primaryColor/40 hover:bg-primaryColor/40 hover:text-whiteColor/40
                        focus:border-primaryColor/90 focus:bg-primaryColor/90 focus:text-whiteColor"
                            onClick={() => {
                              if (filter?.label === "Price") {
                                handlePriceFilter(item);
                              } else if (filter?.label === "Brand") {
                                handleBrandFilter(item);
                              } else if (filter?.label === "Brands") {
                                handleBrandsFilter(item);
                              }
                            }}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-2 right-2" onClick={handleMenuClose}>
                <IoCloseSharp color="white" size={24} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
