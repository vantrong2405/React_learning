import React, { useEffect, useState } from "react";
import CustomHook from "./CustomHook";
export default function Navigation() {
  const [user] = CustomHook({});
  console.log(user);
  return (
    <div>
      Navigation : {" " + user.age ? user.age : ""}
    </div>
  );
}
