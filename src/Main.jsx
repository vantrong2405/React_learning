import React, { useContext } from "react";
import { userContext } from "./App";

export default function Main() {
  const { people } = useContext(userContext);
  console.log(people);
  return <div>Main</div>;
}
