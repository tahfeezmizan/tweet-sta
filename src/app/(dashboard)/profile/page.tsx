import ChangePasswordForm from "@/components/profile/change-password-form";
import ProfileForm from "@/components/profile/profile-from";
import React from "react";

export default function page() {
  return (
    <div className="space-y-10 h-auto">
      <ProfileForm />
      <ChangePasswordForm />
    </div>
  );
}
