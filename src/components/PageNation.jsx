import React, { useContext } from 'react';
import { Pagination, Flowbite } from 'flowbite-react';
import { CoinsContext } from './ContextProvider';
const customTheme = {
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px ",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-full border-none bg-transparent px-2 py-2 mt-2 leading-tight text-[#87CEEB] enabled:hover:bg-transparent enabled:hover:text-[#87CEEB] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    next: {
      base: "rounded-full border-none bg-transparent px-2 py-2 mt-2 leading-tight text-[#87CEEB] enabled:hover:bg-transparent enabled:hover:text-[#87CEEB] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    selector: {
      base: "w-10 h-10 border-none rounded-full mt-2 bg-transparent py-2 leading-tight text-[#87CEEB] enabled:hover:bg-transparent enabled:hover:text-[#87CEEB] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active: "bg-[#FFFFFF29] text-cyan-600 mt-2 hover:bg-[#FFFFFF29] hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "cursor-not-allowed opacity-50"
    }
  }
};
export function Pagenation() {
  const { currentPage, totalPages, onPageChange } = useContext(CoinsContext);
  return (
    <Flowbite>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          previousLabel="<"
          nextLabel=">"
          theme={customTheme}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </Flowbite>
  );
}
