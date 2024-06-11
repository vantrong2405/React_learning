import React, { useEffect, useState } from "react";
import CustomHook from "./CustomHook";
export default function Cart() {
  //   const  user  = CustomHook({});
  const [user] = CustomHook({});
  //   const { user } = CustomHook({});
  return (
    <div>
      Cart : {" " + user.name ? user.name : " "}
    </div>
  );
}
