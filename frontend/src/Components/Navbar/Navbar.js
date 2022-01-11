import React from "react";
import { useSelector } from "react-redux";
import PrivateNavbar from "./PrivateNavbar/PrivateNavbar";
import PublicNavbar from "./PublicNavbar/PublicNavbar";

function Navbar() {
  const userLogin = useSelector((state) => state?.users?.userAuth);
  return <>{userLogin ? <PrivateNavbar /> : <PublicNavbar />}</>;
}

export default Navbar;
