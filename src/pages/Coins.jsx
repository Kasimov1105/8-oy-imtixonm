import React, { useContext } from 'react';
import { CoinsContext } from '../components/ContextProvider';
import Hero from '../components/Hero';
import { Table, TableBody, TableHead, TableHeadCell, Drawer, Flowbite } from "flowbite-react";
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { Pagenation } from '../components/PageNation';
function Coins() {
  const { coins, loading, error, toggleCoinSelection, selectedCoins, currency } = useContext(CoinsContext);
  if (loading) return <p className='mt-16 text-2xl text-green-800'>Loading...</p>;
  if (error) return <p className='mt-16 text-2xl text-red-600'>Error: {error}</p>;
  const isCoinSelected = (coin) => selectedCoins.includes(coin.id);
  const customTheme = {
    table: {
      row: {
        base: "group/row",
        hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
        striped: "odd:bg-blue-50 even:bg-blue-200 odd:dark:bg-gray-800 even:dark:bg-gray-700",
      },
      body: {
        base: "group/body",
        cell: {
          base: "px-6 text-white py-4 bg-[#424242] max-w-[1280px]"
        }
      },
      head: {
        base: "group/head bg-black text-xs uppercase text-gray-700 dark:text-gray-400",
        cell: {
          base: "bg-[#87CEEB] border-none p-5"
        }
      },
    },
  };
  function getPriceDisplay(price, currency) {
    switch (currency) {
      case 'USD':
        return` $${price}`;
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
  return (
    <div className=' m-auto bg-[#424242]'>
      <Hero />
      <div className='max-w-[1232px] m-auto'>
       <div className='flex flex-col max-w-[1140px] m-auto'>
       <h1 className='m-auto mt-5 text-center font-["Montserrat"] text-white text-3xl'> Cryptocurrency Prices by Market Cap</h1>
        <input type="text" placeholder="Search For a Crypto Currency.." className=" input text-white bg-[#424242] rounded-sm  input-bordered  justify-center	my-5 " />
       </div>
        <Drawer open={false}>
          <Drawer.Items>Drawer item</Drawer.Items>
        </Drawer>
        <Flowbite theme={{ theme: customTheme }}>
          <div className="max-w-[1140px] bg-black mx-auto mt-4">
            <Table striped>
              <TableHead>
                <TableHeadCell>Coin</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>24h Change</TableHeadCell>
                <TableHeadCell>Market Cap</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {coins.map((coin) => (
                  <Table.Row
                    key={coin.id}
                    className="bg-black dark:border-gray-700 border-blue-500 "
                  >
                    <Table.Cell className="whitespace-nowrap text-center items-center font-medium flex gap-3 text-gray-900 dark:text-white">
                      <img src={coin.image} alt={coin.name} className="coin-image" style={{ width: '50px', height: '50px' }} />
                      <Link className='flex flex-col text-start' to={`/coins/${coin.id}`}>
                        <h3 className='text-white text-2xl font-["Roboto"] font-normal'>{coin.symbol.toUpperCase()}</h3>
                        <p className='text-white text-sm font-["Roboto"]'>{coin.name}</p>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{getPriceDisplay(coin.current_price, currency)}</Table.Cell>
                    <Table.Cell>
                      <div className='flex gap-4 text-center items-center'>
                        <IoEyeSharp
                          style={{
                            fontSize: "25px",
                            cursor: 'pointer',
                            color: isCoinSelected(coin) ? 'green' : 'gray',
                          }}
                          onClick={() => toggleCoinSelection(coin)}
                        />
                        <div style={{ color: `${coin.price_change_percentage_24h > 0 ? "green" : "red"}` }}>
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>{getPriceDisplay(coin.market_cap, currency)}</Table.Cell>
                  </Table.Row>
                ))}
              </TableBody>
            </Table>
          </div>
        </Flowbite>
      </div>
      <Pagenation />
    </div>
  );
}

export default Coins;
