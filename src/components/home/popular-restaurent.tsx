"use client";

import {
  BadgePercent,
  Bike,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHead from "../shared/section-head";

const popularRestaurent = [
  {
    id: 1,
    image: "https://i.ibb.co/1YSxP6xz/Popular-Restaurent-1.jpg",
    name: "Burger King",
    delivery_time: "20–30 min",
    discount: "30% Off",
    rating: 4.6,
    reviews: 85,
    delivery_fee: "€15",
    menu_items: ["Pizza", "Burger", "Posta", "Chicken Fry"],
  },
  {
    id: 2,
    image: "https://i.ibb.co/rf1JBVnj/Popular-Restaurent-2.jpg",
    name: "Vienna's Delight",
    delivery_time: "20–30 min",
    discount: "30% Off",
    rating: 4.6,
    reviews: 85,
    delivery_fee: "€9",
    menu_items: ["Pizza", "Burger", "Posta", "Chicken Fry"],
  },
  {
    id: 3,
    image: "https://i.ibb.co/JRz3ktJH/Popular-Restaurent-3.jpg",
    name: "AlpenFlair Bistro",
    delivery_time: "20–30 min",
    discount: "30% Off",
    rating: 4.6,
    reviews: 85,
    delivery_fee: "€20",
    menu_items: ["Pizza", "Burger", "Posta", "Chicken Fry"],
  },
  {
    id: 4,
    image: "https://i.ibb.co/mC9cGy5h/Popular-Restaurent-4.jpg",
    name: "Mozart's Table",
    delivery_time: "20–30 min",
    discount: "30% Off",
    rating: 4.6,
    reviews: 85,
    delivery_fee: "€17",
    menu_items: ["Pizza", "Burger", "Posta", "Chicken Fry"],
  },
];

export default function PopularRestaurent() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHead
        subheading="Popular Restaurent"
        heading="Popular "
        highlight="Restaurent Near me"
        buttonText="View All"
      />

      <div className="relative group mt-10 md:mt-14">
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="popular-food-slider-prev flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 -ml-6">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="popular-food-slider-next flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 -mr-6">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          centeredSlides={false}
          grabCursor={true}
          navigation={{
            prevEl: ".popular-food-slider-prev",
            nextEl: ".popular-food-slider-next",
          }}
          modules={[Navigation, Pagination]}
          className="popular-food-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {popularRestaurent.map((restaurent) => (
            <SwiperSlide key={restaurent.id}>
              <div className="group/card bg-white rounded-2xl shadow-sm transition-all duration-500 transform  overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover/card:scale-110"
                    style={{
                      backgroundImage: `url(${restaurent.image})`,
                    }}
                  />

                  <div className="absolute top-4 left-0 bg-orange-500 text-white px-2 py-1 rounded-r-full text-sm  font-semibold flex items-center gap-1">
                    <BadgePercent />
                    {restaurent.discount}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">
                      {restaurent.rating}
                    </span>
                    <span className="text-xs text-gray-600">
                      ({restaurent.reviews})
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium font-poppins text-[#262626] mb-2">
                    {restaurent.name}
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#5C5C5C]" />
                        <span className="text-sm text-[#ED6923]">
                          {restaurent.delivery_time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bike className="w-4 h-4 text-[#5C5C5C]" />

                        <span className="text-sm text-[#ED6923]">
                          Delivery Fee {restaurent.delivery_fee}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    {restaurent.menu_items.map((item, index) => (
                      <span className="text-sm font-poppins leading-4 text-[#767676]">
                        {item}
                        {index < restaurent.menu_items.length - 1 && " | "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
