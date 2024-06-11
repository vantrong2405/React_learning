import React from "react";
import { useEffect, useState } from "react";
import { getUser } from "../App";
export default function CustomHook(value) {
  const [user, setUser] = useState(value);
  useEffect(() => {
    console.log("didmount");
    getUser().then(res => {
      setUser(res.data);
    });
  }, []);
  //   return user;
  //   return { user }; // nếu thế thì bên kia dùng destructuring để lấy
  return [user]; // nếu thế thì bên kia dùng destructuring để lấy
}
