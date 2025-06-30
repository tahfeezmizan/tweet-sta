"use client";

import Image from "next/image";
import appStore from "../../asstes/app-store.png.png";
import googleStore from "../../asstes/google-store.png.png";
import appInterface from "../../asstes/app-interface.png";
import bg from "../../asstes/app-bg.png";

export default function MobileApp() {
  return (
    <section className="bg-transparent py-12 md:py-16 lg:py-20">
      <div
        className="container mx-auto px-4 py-12 lg:py-16"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="col-span-1 lg:col-span-2">
            <p className="text-xl font-normal font-rancho ">Restaurants</p>
            <h2 className="text-[40px] font-semibold font-poppins mb-6">
              Enhance your experience, <br />
              <span className="text-[#ED6923]">
                {" "}
                Download the Tweet app today!
              </span>
            </h2>

            <p className="text-[#5C5C5C] text-base font-poppins leading-relaxe pr-48 mb-8">
              Discover a whole new level of convenience with our mobile app.
              From browsing our delectable menu to securing exclusive deals,
              it's your gateway to a world of culinary delights. Download now
              and elevate your dining experience with just a tap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Image src={appStore} alt="App Store" width={150} height={50} />
              <Image
                src={googleStore}
                alt="App Store"
                width={150}
                height={50}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white mt-36 font-poppins">
              {/* Stat 1 - Food Menu */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
                <div className="text-xl font-poppins font-normal  opacity-90">Food Menu</div>
              </div>

              {/* Stat 2 - Downloads */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
                <div className="text-xl font-poppins font-normal  opacity-90">Downloads</div>
              </div>

              {/* Stat 3 - Positive Reviews */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">20+</div>
                <div className="text-xl font-poppins font-normal  opacity-90">
                  Positive reviews
                </div>
              </div>

              {/* Stat 4 - Average Review */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">4.7</div>
                <div className="text-xl font-poppins font-normal  opacity-90">
                  Average Review
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 relative">
            <Image
              src={appInterface}
              alt="Mockup"
              width={345}
              height={615}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
