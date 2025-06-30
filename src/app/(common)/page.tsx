import CategorySlider from "@/components/home/category-slider";
import HeroSection from "@/components/home/hero-section";
import MobileApp from "@/components/home/mobile-app";
import PopularFoodSlider from "@/components/home/popular-food-slider";
import PopularRestaurent from "@/components/home/popular-restaurent";
import Testimonial from "@/components/home/testimonial";

export default function page() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div
        className="space-y-16 pt-40 md:pt-30 "
        style={{
          backgroundImage: "linear-gradient(135deg,  #FFD9C226, #fdd4ba66)",
        }}
      >
        <CategorySlider />
        <PopularFoodSlider />
        <PopularRestaurent />
        <MobileApp />
        <Testimonial />
      </div>
    </div>
  );
}
