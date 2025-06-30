import Sidebar from "@/components/profile/sidebar";
import Footer from "@/components/shared/footer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-10  p-8 bg-[#fdd4ba66]">
        <div className="col-span-1 md:col-span-2 ">
          <Sidebar />
        </div>
        <div className="col-span-5 md:col-span-8">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
