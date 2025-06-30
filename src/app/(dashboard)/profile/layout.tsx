import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/profile/sidebar";
import Footer from "@/components/shared/footer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="grid grid-cols-5 p-8 bg-[#fdd4ba66]">
        <div className="col-span-1 border">
          <Sidebar />
        </div>
        <div className="col-span-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
