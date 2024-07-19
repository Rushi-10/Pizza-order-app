import React from "react"
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="border-b border-stone-500 py-3 px-4 bg-yellow-400 uppercase sm:px-6 flex items-center justify-around ">
    <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
    <SearchOrder/>
    <UserName/>
    </header>
  )
};

export default Header;
