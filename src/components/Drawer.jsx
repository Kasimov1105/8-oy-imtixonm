"use client";
import { Button, Drawer } from "flowbite-react";
import { useState, useContext } from "react";
import { CoinsContext } from "../components/ContextProvider";
export function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCoins, coins, currency, toggleCoinSelection } =
    useContext(CoinsContext);
  const selectedCoinDetails = coins.filter((coin) =>
    selectedCoins.includes(coin.id)
  );
  const handleClose = () => setIsOpen(false);
  function getPriceDisplay(price, currency) {
    switch (currency) {
      case "USD":
        return ` $${price}`;
      case "EUR":
        return `€${price}`;
      case "TRY":
        return `₺${price}`;
      case "RUB":
        return `₽${price}`;
      case "INR":
        return `₹${price}`;
      default:
        return price;
    }
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>WATCH LIST</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="bg-[#515151] w-[400px]"
      >
        <Drawer.Header title="WATCHLIST" />
        <Drawer.Items>
          <div className="flex flex-wrap gap-5">
            {selectedCoinDetails.length > 0 ? (
              selectedCoinDetails.map((coin) => (
                <div
                  key={coin.id}
                  className="flex border bg-[#14161A] rounded-3xl w-40 h-52 items-center justify-center py-4"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: "100px", height: "100px" }}
                      className="object-cover"
                    />
                    <p className="text-white">
                      {getPriceDisplay(coin.current_price.toFixed(2), currency)}
                    </p>
                    <button
                      onClick={() => toggleCoinSelection(coin)} // Remove tugmasi bosilganda tanlangan mahsulotni o'chirish
                      className="text-white hover:bg-red-600 px-2 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No coins selected.</p>
            )}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
