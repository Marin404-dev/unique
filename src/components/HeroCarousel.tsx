import { useState } from "react";
import "../index.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image1 from "../assets/1.png";

export default function HeroCarousel() {
  const headerHeight = 50;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
    >
      {/* main wrapper: almost full screen width, centered, rounded and clipped */}
      <div className="relative w-[90vw] max-w-8xl h-[85%] md:h-[80%] rounded-2xl overflow-hidden shadow-lg">
        <div ref={sliderRef} className="keen-slider h-full">
          <div
            className="keen-slider__slide number-slide1 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/src/assets/hero1.jpg')",
            }}
          >
            <img src={Image1} alt="1"></img>
          </div>
          <div
            className="keen-slider__slide number-slide2 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/src/assets/hero2.jpg')",
            }}
          >
            2
          </div>
          <div
            className="keen-slider__slide number-slide3 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/src/assets/hero3.jpg')",
            }}
          >
            3
          </div>
          <div
            className="keen-slider__slide number-slide4 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/src/assets/hero4.jpg')",
            }}
          >
            4
          </div>
          <div
            className="keen-slider__slide number-slide5 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/src/assets/hero5.jpg')",
            }}
          >
            5
          </div>
          <div
            className="keen-slider__slide number-slide6 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/src/assets/hero6.jpg')",
            }}
          >
            6
          </div>
        </div>

        {/* arrows - positioned inside the rounded container */}
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={false}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 text-white opacity-25"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={false}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5 text-white opacity-25"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </button>
          </>
        )}

        {/* dots */}
        {loaded && instanceRef.current && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              const active = currentSlide === idx;
              return (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    active ? "bg-white shadow-lg" : "bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
