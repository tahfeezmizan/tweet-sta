"use client";

import {
  BadgePercent,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Heart,
  Plus,
  Star,
  Store,
} from "lucide-react";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHead from "../shared/section-head";

const popularFoods = [
  {
    id: 1,
    title: "Burger with Emmental Cheese",
    image:
      "https://i.ibb.co/rKz22ybf/special-items-8-dishes-to-try-at-off-the-grill-in-allentown-nj.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
  {
    id: 2,
    title: "Tandoori Chicken",
    image: "https://i.ibb.co/v6xj48RX/gallery5.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
  {
    id: 3,
    title: "Döner Kebab",
    image: "https://i.ibb.co/6JH6Z384/armenian-lule-kebab.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
  {
    id: 4,
    title: "Pepperoni Pizza Slice",
    image:
      "https://i.ibb.co/xqCWm72m/pizza-black-background-top-view-762785-58049.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
  {
    id: 1,
    title: "Burger with Emmental Cheese",
    image:
      "https://i.ibb.co/rKz22ybf/special-items-8-dishes-to-try-at-off-the-grill-in-allentown-nj.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
  {
    id: 2,
    title: "Tandoori Chicken",
    image: "https://i.ibb.co/v6xj48RX/gallery5.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
  {
    id: 3,
    title: "Döner Kebab",
    image: "https://i.ibb.co/6JH6Z384/armenian-lule-kebab.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
  {
    id: 4,
    title: "Pepperoni Pizza Slice",
    image:
      "https://i.ibb.co/xqCWm72m/pizza-black-background-top-view-762785-58049.jpg", 
    discount: "30% Off",
    priceOriginal: 49.99,
    priceDiscounted: 44.99,
    rating: 4.6,
    reviews: 85,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryCost: "$02",
  },
];

export default function PopularFoodSlider ()  {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHead
        subheading="Popular Food"
        heading="Popular "
        highlight="Food Near me"
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
          {popularFoods.map((food) => (
            <SwiperSlide key={food.id}>
              <div className="group/card bg-white rounded-2xl shadow-sm transition-all duration-500 transform  overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover/card:scale-110"
                    style={{
                      backgroundImage: `url(${food.image})`,
                    }}
                  />

                  <div className="absolute top-4 left-0 bg-orange-500 text-white px-2 py-1 rounded-r-full text-sm  font-semibold flex items-center gap-1">
                    <BadgePercent />
                    {food.discount}
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200">
                    <Heart className="w-4 h-4 text-[#ED6923] hover:text-red-500" />
                  </button>

                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{food.rating}</span>
                    <span className="text-xs text-gray-600">
                      ({food.reviews})
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between gap-5 mb-3">
                    <h3 className="text-lg font-medium font-poppins text-[#262626] mb-2">
                      {food.title}
                    </h3>

                    <div className="flex items-center flex-col text-start">
                      <span className="text-xs text-[#767676] text-start">
                        €{food.priceOriginal}
                      </span>
                      <span className="text-base font-semibold font-poppins text-orange-500">
                        €{food.priceDiscounted}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-[#262626]">
                          <Store className="text-[#262626] size-5" />
                          <span className="text-base font-poppins">
                            {food.restaurant}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#5C5C5C]" />
                            <span className="text-sm text-[#5C5C5C]">
                              {food.deliveryTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-[#5C5C5C]" />
                            <span className="text-sm text-[#5C5C5C]">
                              {food.deliveryCost}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-200 ml-auto">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .popular-food-swiper {
          padding-bottom: 50px !important;
          cursor: grab;
        }

        .popular-food-swiper:active {
          cursor: grabbing;
        }

        .popular-food-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        .popular-food-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #f97316;
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .popular-food-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .popular-food-swiper .swiper-slide {
          height: auto;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
