"use client";

import SectionHead from "@/components/shared/section-head";
import { Category } from "@/lib/common";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const category: Category[] = [
  {
    id: "1",
    name: "Donuts",
    image: "https://i.ibb.co/spTCVR4S/donuts.png",
    description: "Sweet glazed and frosted treats",
    backgroundColor: "#D2B48C",
  },
  {
    id: "2",
    name: "Pizza",
    image: "https://i.ibb.co/0yPxn4TZ/pizza.png",
    description: "Fresh baked with premium toppings",
    backgroundColor: "#FF8C00",
  },
  {
    id: "3",
    name: "Kebab",
    image: "https://i.ibb.co/dNTChXv/kebab.png",
    description: "Grilled meat with fresh vegetables",
    backgroundColor: "#FF6347",
  },
  {
    id: "4",
    name: "Burger",
    image: "https://i.ibb.co/LdMgnBJ6/burger.png",
    description: "Juicy patties with fresh ingredients",
    backgroundColor: "#FF7F00",
  },
  {
    id: "5",
    name: "Sandwich",
    image: "https://i.ibb.co/4nFk2VRZ/sandwich.png",
    description: "Fresh bread with premium fillings",
    backgroundColor: "#FF6B35",
  },
  {
    id: "6",
    name: "Shawarma",
    image: "https://i.ibb.co/0RnyLgHq/shawarma.png",
    description: "Middle Eastern wrapped delight",
    backgroundColor: "#FFD700",
  },
  {
    id: "7",
    name: "Taco",
    image: "https://i.ibb.co/5xsB7tCB/taco.png",
    description: "Mexican flavors in every bite",
    backgroundColor: "#DC143C",
  },
  {
    id: "2",
    name: "Pizza",
    image: "https://i.ibb.co/0yPxn4TZ/pizza.png",
    description: "Fresh baked with premium toppings",
    backgroundColor: "#FF8C00",
  },
  {
    id: "3",
    name: "Kebab",
    image: "https://i.ibb.co/dNTChXv/kebab.png",
    description: "Grilled meat with fresh vegetables",
    backgroundColor: "#FF6347",
  },
  {
    id: "4",
    name: "Burger",
    image: "https://i.ibb.co/LdMgnBJ6/burger.png",
    description: "Juicy patties with fresh ingredients",
    backgroundColor: "#FF7F00",
  },
  {
    id: "5",
    name: "Sandwich",
    image: "https://i.ibb.co/4nFk2VRZ/sandwich.png",
    description: "Fresh bread with premium fillings",
    backgroundColor: "#FF6B35",
  },
  {
    id: "6",
    name: "Shawarma",
    image: "https://i.ibb.co/0RnyLgHq/shawarma.png",
    description: "Middle Eastern wrapped delight",
    backgroundColor: "#FFD700",
  },
  {
    id: "7",
    name: "Taco",
    image: "https://i.ibb.co/5xsB7tCB/taco.png",
    description: "Mexican flavors in every bite",
    backgroundColor: "#DC143C",
  },
];

export default function CategorySlider() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHead
        subheading="Category"
        heading="Popular"
        highlight="Category"
        buttonText="View All"
      />

      <div className="relative group mt-6 md:mt-8">
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="category-slider-prev flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full  hover:bg-white hover:scale-110 transition-all duration-200 -ml-6">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="category-slider-next flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full  hover:bg-white hover:scale-110 transition-all duration-200 -mr-6">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <Swiper
          slidesPerView={7}
          spaceBetween={20}
          loop={true}
          centeredSlides={false}
          grabCursor={true}
          navigation={{
            prevEl: ".category-slider-prev",
            nextEl: ".category-slider-next",
          }}
          modules={[Navigation, Pagination]}
          className="category-swiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
            1536: {
              slidesPerView: 7,
              spaceBetween: 24,
            },
          }}
        >
          {category.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="group/card relative rounded-2xl transition-all duration-500 transform  cursor-pointer mt-10"
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="h-32 md:h-32 flex flex-col items-center justify-center p-4 pt-0 ">
                  <div
                    className="w-full h-full md:w-32 md:h-36 -mt-10 z-30 bg-center bg-no-repeat  group-hover/card:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />
                  <h3 className="text-white text-lg md:text-xl font-poppins  text-center ">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
