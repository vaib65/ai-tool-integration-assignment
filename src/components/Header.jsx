import { Search } from 'lucide-react';

const Header = () => {
  return (
    <>
      <header className="flex items-center w-full justify-between  h-[100px] p-5">
        {/*logo */}
        <div className="flex px-2 gap-3 text-blue-800 font-extrabold  font-serif cursor-pointer">
          <div className="text-3xl">BIOLYT</div>
          <div className=" text-xl py-2">Ai</div>
        </div>

        {/*search and login button */}
        <div className=" flex gap-4 items-center">
          <div className="hidden md:flex  items-center bg-white border border-slate-300  rounded-lg shadow-sm px-3 py-2 md:w-50">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm text-black placeholder-black w-40"
            />
            <Search className="w-4 h-4 text-slate-500" />
          </div>
          <button
            className=" px-4 sm-px-4 py-2
            bg-indigo-500 
            text-white 
            rounded-md cursor-pointer
            transition-all duration-300 
            hover:bg-indigo-600 
            hover:scale-105
            "
          >
            Sign In
          </button>
        </div>
      </header>
    </>
  );
}

export default Header