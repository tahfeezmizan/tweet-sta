"use client";

import { ProfileFormData } from "@/lib/common";
import { LockKeyhole, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>();

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  return (
    <div className="w-8/12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-7 rounded-lg">
          <h3 className="text-2xl font-medium font-poppins mb-6">Profile</h3>

          <div className="space-y-5">
            <div className="p-5 py-3 border-2 border-dotted border-gray-400 rounded-lg">
              <div className="flex items-center gap-2">
                <User className="text-[#F1874F]" />
                <label htmlFor="name">Name:</label>
              </div>
              <input
                className="w-full py-1 outline-none border-none"
                placeholder="Mark Jecno"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            <div className="p-5 py-3 border-2 border-dotted border-gray-400 rounded-lg">
              <div className="flex items-center gap-2">
                <Mail className="text-[#F1874F]" />
                <label htmlFor="email">Email:</label>
              </div>
              <input
                className="w-full py-1 outline-none border-none"
                placeholder="mark-jecno@gmail.com"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="p-5 py-3 border-2 border-dotted border-gray-400 rounded-lg">
              <div className="flex items-center gap-2">
                <LockKeyhole className="text-[#F1874F]" />
                <label htmlFor="address">Address:</label>
              </div>
              <input
                className="w-full py-1 outline-none border-none"
                placeholder="93, Songbird Cir, Blackville, South Carolina, USA-29817"
                type="text"
                {...register("address", { required: "Address is required" })}
              />
            </div>
          </div>
        </div>

        <div className="text-end">
          <button
            type="submit"
            className="text-base md:text-lg font-semibold font-poppins px-4 md:px-12 py-1 md:py-3 rounded-md text-white  bg-[#ED6923]  cursor-pointer mt-3 "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
