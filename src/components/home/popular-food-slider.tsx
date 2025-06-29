"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
  Clock,
  DollarSign,
  Plus,
  Section,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FoodItem } from "@/lib/common";
import SectionHead from "../shared/section-head";

const popularFoods: FoodItem[] = [
  {
    id: "1",
    name: "Burger with Emmental Cheese",
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: 85,
    originalPrice: 49.99,
    discountedPrice: 44.99,
    discount: 30,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryFee: "$02",
  },
  {
    id: "2",
    name: "Tandoori Chicken",
    image:
      "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: 95,
    originalPrice: 49.99,
    discountedPrice: 44.99,
    discount: 30,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryFee: "$02",
  },
  {
    id: "3",
    name: "Döner Kebab",
    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: 85,
    originalPrice: 49.99,
    discountedPrice: 44.99,
    discount: 30,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryFee: "$02",
  },
  {
    id: "4",
    name: "Pepperoni Pizza Slice",
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: 85,
    originalPrice: 49.99,
    discountedPrice: 44.99,
    discount: 30,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryFee: "$02",
  },
  {
    id: "5",
    name: "Chicken Shawarma",
    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    reviews: 92,
    originalPrice: 49.99,
    discountedPrice: 44.99,
    discount: 30,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryFee: "$02",
  },
  {
    id: "6",
    name: "Grilled Sandwich",
    image:
      "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
    reviews: 78,
    originalPrice: 49.99,
    discountedPrice: 44.99,
    discount: 30,
    restaurant: "Burger King",
    deliveryTime: "30 min",
    deliveryFee: "$02",
  },
];

const PopularFoodSlider: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHead
        subheading="Popular Food"
        heading="Popular "
        highlight="Food Near me"
        buttonText="View All"
      />

      <div className="relative group mt-10 md:mt-14">
        {/* Custom Navigation Buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="popular-food-slider-prev flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 -ml-6">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          pagination={{
            clickable: true,
            dynamicBullets: true,
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
              <div className="group/card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Food Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover/card:scale-110"
                    style={{
                      backgroundImage: `url(${food.image})`,
                    }}
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
                    <span className="text-xs">🔥</span>
                    {food.discount}% Off
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{food.rating}</span>
                    <span className="text-xs text-gray-600">
                      ({food.reviews})
                    </span>
                  </div>
                </div>

                {/* Food Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {food.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-orange-500">
                      €{food.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      €{food.originalPrice}
                    </span>
                  </div>

                  {/* Restaurant Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-xs">🏪</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {food.restaurant}
                      </span>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {food.deliveryTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {food.deliveryFee}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add Button */}
                  <button className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-200 ml-auto">
                    <Plus className="w-5 h-5" />
                  </button>
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

export default PopularFoodSlider;
