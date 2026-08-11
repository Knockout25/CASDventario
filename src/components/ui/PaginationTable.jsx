import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

export default function PaginationTable() {
  return (
    <div className="flex items-center space-x-1">
      <button className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer">
        <CaretLeftIcon size={20} />
      </button>
      <button className="w-10 h-10 rounded-md cursor-pointer transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800 focus:text-white focus:bg-cyan-600">
        <p>1</p>
      </button>
      <button className="w-10 h-10 rounded-md cursor-pointer transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800 focus:text-white focus:bg-cyan-600">
        <p>2</p>
      </button>
      <button className="w-10 h-10 rounded-md cursor-pointer transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800 focus:text-white focus:bg-cyan-600">
        <p>3</p>
      </button>
      <div className="flex items-center justify-center w-10 h-10 rounded-md">
        <p className="">...</p>
      </div>
      <button className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer">
        <CaretRightIcon className="cursor-pointer" size={20} />
      </button>
    </div>
  );
}
