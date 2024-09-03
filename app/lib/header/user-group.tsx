"use client";
import { getUserById } from "../auth/dal";
import ShopingCart from "./shoping-cart";
import NotiBell from "./noti-bell";
import UserIcon from "./user-icon";
import { useEffect, useState } from "react";
import { set } from "zod";

export default function UserGroup() {
  const [user, setUser] = useState<{ id: string; firstName: string } | null>(
    null
  );
  useEffect(() => {
    async function getUser() {
      const userInfo = await getUserById();
      setUser(userInfo);
    }
    getUser();
  }, []);
  return (
    <div className="d-flex align-items-center position-relative">
      <ShopingCart />
      <NotiBell />
      <UserIcon user={{ name: user?.firstName }} />
    </div>
  );
}
