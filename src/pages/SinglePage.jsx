import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoinsContext } from '../components/ContextProvider';
import PriceChart from '../components/PriceChart';
function SinglePage() {
  const { currency } = useContext(CoinsContext);
  const { code } = useParams();
  const [loading, setLoading] = useState(true);  // Initial state as true
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);
  useEffect(() => {
    async function fetchCoin() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${code}`);
        if (!response.ok) {
          throw new Error("Ma'lumotlarni yuklashda xato!");
        }
        const data = await response.json();
        setCoin(data);  
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCoin();
  }, [code]);
  if (loading) return <p className='mt-16 text-2xl text-green-800 '>Loading...</p>;
  if (error) return <p className='mt-16 text-2xl text-red-600'>Xatolik yuz berdi: {error}</p>;
  function getPriceDisplay(price, currency) {
    switch (currency) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      case 'TRY':
        return `₺${price}`;
      case 'RUB':
        return `₽${price}`;
      case 'INR':
        return `₹${price}`;
      default:
        return price;
    }
  }
  if (!coin) return <p className='mt-32'>Ma'lumot topilmadi.</p>;

  return (
    <div className='mt-16 flex gap-3 bg-[#14161A] pb-24 '>
      <div>
        {coin && (
          <div key={coin.id} className="card w-96 shadow-xl mb-4 max-w-[700px] text-start justify-center p-3 rounded-none border-r-2 border-r-[#808080] bg-[#14161A]">
            <div className='flex flex-col gap-5 text-center m-auto'>
              <img style={{ width: "200px", height: "200px" }} src={coin.image.large} alt={coin.name} />
              <h2 className="card-title font-[Montserrat] text-[48px] font-bold text-white dark:text-red">
                {coin.name}
              </h2>
            </div>
            <div className="card-body flex flex-col gap-5">
              <p className='line-clamp-3 w-full mb-4 font-[Montserrat] text-base font-normal text-white'>{coin.description.en}</p>
              <h3 className='font-[Montserrat] text-xl font-bold text-white'>Rank: {coin.market_cap_rank}</h3>
              <span className='flex items-center gap-3'>
                <h3 className='font-[Montserrat] text-lg font-bold text-white'>Current Price: </h3>
                <p className='font-[Montserrat] text-lg font-normal text-white'>{getPriceDisplay(coin.market_data.current_price[currency.toLowerCase()], currency)}</p>
              </span>
              <span className='flex items-center gap-2'>
                <h3 className='font-[Montserrat] text-lg font-bold text-white'>Market Cap:</h3>
                <p className='font-[Montserrat] text-lg font-normal text-white'>{getPriceDisplay(coin.market_data.market_cap[currency.toLowerCase()], currency)}</p>
              </span>
            </div>
          </div>
        )}
      </div>
      <div>
        <PriceChart/>
      </div>
    </div>
  );
}
export default SinglePage;
