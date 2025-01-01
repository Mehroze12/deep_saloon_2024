import React from "react";
import { IMAGES } from "../../Utils/images";
import About_Card from "./Components/About_Card";
import { NeetToCancel } from "../../Utils/DummyData";
import Carousel from "../../Components/carosuel/carousel";

const AboutUs = () => {
  const paragraph =
    "Deep Salon’s story began with a passion for beauty and well-being. Founded in [Year], we started as a small salon with big dreams—to offer more than just beauty services, but an experience of comfort, trust, and excellence. Over the years, our commitment to quality and genuine customer care has helped us become a go-to destination for beauty lovers. Today, we continue to blend tradition with innovation, delivering an unparalleled salon experience.";

  const heading = "From Humble Beginnings to a Trusted Beauty Destination";
  return (
    <div className="bg-[#161616]">
      <div className="relative">
        <img
          className="w-[100%]"
          src={IMAGES.ABOUTHEROBANNER}
          alt={IMAGES.ABOUTHEROBANNER}
        />
      </div>
      {/* Our Story section start here  */}
      <div className="flex py-20">
        <div>
          <img
            className="w-[1250px] object-contain"
            src={IMAGES.ABOUTMODALONE}
            alt={IMAGES.ABOUTMODALONE}
          />
        </div>
        <div className="text-center text-white flex flex-col justify-center items-center px-6">
          <h1 className="text-[#E1C45B]">Our Story</h1>
          <h2 className="py-4 text-[40px] font-semibold leading-10">
            {heading}
          </h2>
          <p className="text-[#CACACA] text-sm">{paragraph}</p>
        </div>
        <div>
          <img
            className="w-[1250px] object-contain"
            src={IMAGES.ABOUTMODALTWO}
            alt={IMAGES.ABOUTMODALTWO}
          />
        </div>
      </div>
      {/* Our Story section start here  */}

      <div>
        {/* Since 1999 section start here */}
        <div className="max-w-[80%] mx-auto">
          <About_Card />
        </div>
        {/* Since 1999 section end here */}

        <div>
          {NeetToCancel.map((items, ind) => (
            <div className="flex flex-col items-center py-10" key={ind}>
              <h1 className="text-[#D4AF37] font-semibold text-[100px]">
                {items.heading}
              </h1>
              <img className="w-[400px]" src={items.img} alt={items.img} />
              <h2>{items.SubHead}</h2>
              <p>{items.parph}</p>
            </div>
          ))}
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default AboutUs;
