"use client";
import { Heart, LocateFixed, StarIcon, TruckElectric } from "lucide-react";
import bannerImg from "../../asstes/banner-img.png";
import Image from "next/image";
import { Avatar } from "antd";
import FlavorImg from "../../asstes/flavor-img.png";

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #ffd9c2, #fff4ed)",
        height: "calc(100vh - 120px)",
      }}
      className="py-20"
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-end justify-between gap-5">
        <div className="flex-1">
          <h2 className="text-8xl font-rancho text-[#ED6923] leading-32 ">
            Hungry?
          </h2>
          <h2 className="text-7xl font-bold font-poppins leading-24 mb-4 tracking-[-2px]">
            Let Us{" "}
            <span className="text-[#ED6923]">
              Bring <br /> The Feast to You
            </span>
          </h2>
          <p className="text-lg font-poppins mb-7">
            Explore hundreds of delicious options from top restaurants and Enjoy
            fast, reliable delivery right to you.
          </p>

          <div className="flex items-center ">
            <div className="flex items-center justify-between border border-[#ED6923] py-4 px-4 rounded-l-lg w-96">
              <input
                type="text"
                placeholder="Enter your location"
                className="border-0 outline-none text-base bg-transparent"
              />
              <span className="flex items-center gap-2 text-sm font-poppins text-[#ED6923]">
                <LocateFixed className="text-black " /> Locate me
              </span>
            </div>
            <button className="bg-[#ED6923] text-white text-xl font-semibold p-3.5 px-6 border border-[#ED6923] rounded-r-lg">
              Find Food
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative">
            <div className="absolute bg-white p-5 w-56  rounded-2xl">
              <div className="mb-3 flex items-center">
                <Avatar
                  size={50}
                  className="mr-2"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                />
                <Avatar
                  size={50}
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                />

                <Image
                  src={bannerImg}
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <h3>Satisfied Customer</h3>
              <p className="flex items-center">
                <StarIcon className="text-[#F4C700]" /> 5.0 (3K Reviews)
              </p>
            </div>

            <Image
              src={bannerImg}
              alt="logo"
              width={500}
              height={500}
              className="w-[600px] h-auto"
            />

            <div className="absolute -bottom-8 left-0 flex items-center justify-between bg-white/60 backdrop-blur-xl p-5 w-80  rounded-2xl">
              <div className="">
                <Image
                  src={FlavorImg}
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-28 h-28 rounded-2xl"
                />
              </div>
              <div className="space-y-1 font-poppins ">
                <h3 className="text-base font-semibold font-poppins leading-6">
                  Flavor Fusion Bistro
                </h3>
                <p className="text-[12px] ">Kaliurang, Seleman</p>
                <p className="text-base font-poppins flex items-center gap-1">
                  4.9 <StarIcon className="size-4 " />
                </p>
                <div className="w-7 h-7 mr-auto p-1 flex items-center justify-center overflow-hidden rounded-full border border-gray-300">
                  {" "}
                  <Heart className="text-[#F4C700] " />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 right-20 w-40 px-6 py-4 flex items-center justify-between gap-4 bg-white/60 backdrop-blur-xl rounded-2xl">
              <div className="bg-[#F5EAE3] p-2 rounded-full flex items-center justify-center">
                <TruckElectric className="size-8 text-[#ED6923]" />
              </div>
              <div className="space-y-1 font-poppins ">
                <h3 className="text-base font-semibold font-poppins leading-6">
                  F24/7
                </h3>
                <p className="text-base ">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
