import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IMAGES } from "../../utils/Images";
import "./carousel.css";

const dummySlides = [
  "Slide 1 Content",
  "Slide 2 Content",
  "Slide 3 Content",
  "Slide 4 Content",
];

export default function Carousel({
  slides = dummySlides,
  options = { loop: true },
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [btnStates, setBtnStates] = useState({ prev: true, next: true });

  const updateStates = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    setBtnStates({
      prev: !emblaApi.canScrollPrev(),
      next: !emblaApi.canScrollNext(),
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateStates();
    emblaApi.on("reInit", updateStates).on("select", updateStates);
  }, [emblaApi, updateStates]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <div className="grid grid-cols-12">
                <div className="hidden md:block md:col-span-5">
                  <img
                    src={IMAGES.PEOPLESAY}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="col-span-12 md:col-span-7 flex items-center -ml-2">
                  <div className="w-full">
                    <div className="bg-darkYellowColor text-center font-semibold text-2xl py-4 text-white capitalize">
                      sanju kumari
                    </div>
                    <div className="bg-secondaryColor relative text-center py-8 px-12 text-white text-base font-light">
                      <div className="absolute  left-4 top-[-5px] ">
                        <img
                          src={IMAGES.COMMA}
                          className="h-[55px] rotate-180"
                        />
                      </div>
                      <p>
                        Staff were very kind and nice but they definitely need
                        more training and inspiration to do better. My waxing
                        experience was poor and pedicure not up to the mark.
                        Moreover, one of the staff used my phone to give
                        themselves a 5-star rating (which I deleted later).
                      </p>
                      <div className="absolute  right-4 bottom-0 ">
                        <img src={IMAGES.COMMA} className="h-[55px] " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <button
          className="embla__button embla__button--prev"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={btnStates.prev}
        >
          <ArrowIcon />
        </button>
        <button
          className="embla__button embla__button--next"
          onClick={() => emblaApi?.scrollNext()}
          disabled={btnStates.next}
        >
          <ArrowIcon isNext />
        </button>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot border border-rose-950 ${
                index === selectedIndex ? "embla__dot--selected" : ""
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ArrowIcon = ({ isNext }) =>
  isNext ? (
    <img src={IMAGES.RIGHTICON} className="h-[35px]" />
  ) : (
    <img src={IMAGES.LEFTICON} className="h-[35px]" />
  );
