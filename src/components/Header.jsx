import React, { useContext } from "react";
import ThemeControl from "./ThemeControl";
import { Link } from "react-router-dom";
import { Component as DrawerComponent } from "./Drawer";
import { CoinsContext } from "../components/ContextProvider";
function Header() {
  const { setCurrency } = useContext(CoinsContext);
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-stone-900 z-50">
      <div className="flex max-w-[1260px] h-16 m-auto items-center text-center justify-between">
        <Link to={`/`}>
          <img src="/CRYPTOFOLIO.svg" alt="cryptolio" />
        </Link>
        <div className="flex gap-3 items-center text-center">
          <ThemeControl />
          <select
            className="select select-ghost text-white focus:bg-stone-900 focus:text-white"
            onChange={handleCurrencyChange}
          >  <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="TRY">TRY</option>
            <option value="RUB">RUB</option>
          </select>
          <DrawerComponent />
        </div>
      </div>
    </div>
  );
}
export default Header;
