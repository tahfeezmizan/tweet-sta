"use client";

import { PasswordFormData } from "@/lib/common";
import { LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordFormData>();

  const onSubmit = (data: PasswordFormData) => {
    console.log(data);
  };

  return (
    <div className="w-full md:w-8/12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-7 rounded-lg">
          <h3 className="text-2xl font-medium font-poppins mb-6">
            Change Password
          </h3>

          <div className="space-y-5">
            <div className="p-5 py-3 border-2 border-dotted border-gray-400 rounded-lg">
              <div className="flex items-center gap-2">
                <LockKeyhole className="text-[#F1874F]" />
                <label htmlFor="current-password">Current Password:</label>
              </div>
              <input
                className="w-full py-1 outline-none border-none"
                placeholder="**********"
                type="password"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>
            <div className="p-5 py-3 border-2 border-dotted border-gray-400 rounded-lg">
              <div className="flex items-center gap-2">
                <LockKeyhole className="text-[#F1874F]" />
                <label htmlFor="new-password">New Password:</label>
              </div>
              <input
                className="w-full py-1 outline-none border-none"
                placeholder="**********"
                type="password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <div className="p-5 py-3 border-2 border-dotted border-gray-400 rounded-lg">
              <div className="flex items-center gap-2">
                <LockKeyhole className="text-[#F1874F]" />
                <label htmlFor="confirm-password">Confirm Password:</label>
              </div>
              <input
                className="w-full py-1 outline-none border-none"
                placeholder="**********"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="text-end mt-4">
          <button
            type="submit"
            className="text-base md:text-lg font-semibold font-poppins px-4 md:px-12 py-1 md:py-3 rounded-md text-white  bg-[#ED6923] cursor-pointer  "
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
