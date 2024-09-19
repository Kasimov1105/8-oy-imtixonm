import React, { createContext, useState, useEffect } from 'react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils';
export const CoinsContext = createContext();
export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCoins, setSelectedCoins] = useState(() => getFromLocalStorage('selectedCoins') || []);
  const [currency, setCurrency] = useState('INR');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const onPageChange = (page) => setCurrentPage(page);
  useEffect(() => {
    async function fetchCoins() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h`
        );
        if (!response.ok) {
          throw new Error('Error fetching coins!');
        }
        const fetchedCoins = await response.json();
        setCoins(fetchedCoins);
        const totalCoins = parseInt(response.headers.get('X-Total-Count'), 10) || 100; 
        setTotalPages(Math.ceil(totalCoins / 10)); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCoins();
  }, [currency, currentPage]); 

  const toggleCoinSelection = (coin) => {
    let updatedSelection;
    if (selectedCoins.includes(coin.id)) {
      updatedSelection = selectedCoins.filter((id) => id !== coin.id);
    } else {
      updatedSelection = [...selectedCoins, coin.id];
    }
    setSelectedCoins(updatedSelection);
    saveToLocalStorage('selectedCoins', updatedSelection);
  };
  return (
    <CoinsContext.Provider
      value={{ coins, loading, error, selectedCoins, toggleCoinSelection, setCurrency, currentPage, setCurrentPage, totalPages, onPageChange,currency }} // Provide totalPages
    >
      {children}
    </CoinsContext.Provider>
  );
};
