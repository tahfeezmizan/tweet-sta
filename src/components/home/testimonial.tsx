"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestimonialType } from "@/lib/common";
import testimonialImg from "../../asstes/testimonial-image.png";
import Image from "next/image";

const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "Leon Fischer",
    role: "Satisfied Customer",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    comment:
      "Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Regular Customer",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    comment:
      "Amazing service! The food always arrives hot and fresh. Tweet has become my go-to app for ordering food.",
  },
  {
    id: "3",
    name: "Mike Chen",
    role: "Food Enthusiast",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    comment:
      "Excellent variety of restaurants and super fast delivery. The app is user-friendly and the customer service is top-notch!",
  },
  {
    id: "4",
    name: "Emma Wilson",
    role: "Busy Professional",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    comment:
      "Perfect for my busy lifestyle! Quick ordering, reliable delivery, and great food quality. Highly recommend Tweet!",
  },
  {
    id: "5",
    name: "David Rodriguez",
    role: "Happy Customer",
    image:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    comment:
      "Outstanding experience every time! Great selection of food, reasonable prices, and excellent delivery service.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-transparent pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className=" lg:order-1">
            <p className="text-xl font-normal font-rancho ">Testimonial</p>

            <h2 className="text-2xl md:text-[40px] font-semibold font-poppins mb-6">
              What <span className="text-[#ED6923]">Customer Saying</span>{" "}
              <br /> About our Services
            </h2>

            <div className="relative group">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                centeredSlides={false}
                grabCursor={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      ' testimonial-bullet"></span>'
                    );
                  },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="md:w-xl mr-auto bg-[#FDF0E9] rounded-2xl p-6 md:p-8 border border-[#FFCABB]">
                      <p className="text-[#262626] text-lg font-poppins leading-relaxed mb-8 font-medium">
                        <span className="text-orange-500 text-4xl font-rancho">
                          "
                        </span>
                        {testimonial.comment}
                        <span className="text-orange-500 text-4xl font-rancho">
                          "
                        </span>
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 border-2 border-orange-100">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <h4 className="text-xl font-poppins font-semibold text-gray-900 leading-7">
                              {testimonial.name}
                            </h4>
                            <p className="text-[#767676] text-sm font-poppins leading-6">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        <div className="bg-orange-500 p-3 rounded-md flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <Star
                              key={index}
                              className="w-4 h-4 text-white fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 lg:order-2 relative">
            <Image
              src={testimonialImg}
              alt="testimonial"
              width={640}
              height={530}
            />
          </div>
        </div>
      </div>

      {/* Custom Styles for Testimonial Slider */}
      <style jsx global>{`
        .testimonial-swiper {
          padding-bottom: 60px !important;
          cursor: grab;
        }

        .testimonial-swiper:active {
          cursor: grabbing;
        }

        .testimonial-swiper .swiper-pagination {
          bottom: 20px !important;
          left: 0 !important;
          width: auto !important;
          transform: none !important;
        }

        .testimonial-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #dc2626 !important;
          opacity: 0.3 !important;
          transition: all 0.3s ease !important;
          margin: 0 4px !important;
          border-radius: 50% !important;
          display: inline-block !important;
          cursor: pointer !important;
        }

        .testimonial-bullet.swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
          background: #dc2626 !important;
        }

        .testimonial-swiper .swiper-slide {
          height: auto;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .testimonial-swiper {
            padding-bottom: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
