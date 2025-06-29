import CategorySlider from "@/components/home/category-slider";
import HeroSection from "@/components/home/hero-section";
import PopularFoodSlider from "@/components/home/popular-food-slider";

export default function page() {
  return (
    <div>
      <HeroSection />
      <div className="space-y-16 pt-20">
        <CategorySlider />
        <PopularFoodSlider />
      </div>
    </div>
  );
}
