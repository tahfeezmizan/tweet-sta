import CategorySlider from "@/components/home/category-slider";
import HeroSection from "@/components/home/hero-section";
import PopularFoodSlider from "@/components/home/popular-food-slider";
import PopularRestaurent from "@/components/home/popular-restaurent";

export default function page() {
  return (
    <div>
      <HeroSection />
      <div
        className="space-y-16 pt-20 "
        style={{
          backgroundImage: "linear-gradient(135deg,  #FFD9C226, #fdd4ba66)",
        }}
      >
        <CategorySlider />
        <PopularFoodSlider />
        <PopularRestaurent />
      </div>
    </div>
  );
}
