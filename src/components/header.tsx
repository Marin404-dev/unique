import uniqueLogo from "../assets/unique_logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center text-center p-3 border-b border-[#dadada] shadow">
      <div className="flex flex-1 justify-center">
        <nav className="flex flex-row self-center">
          <a href="">
            <p className="pl-8 pr-8">Home</p>
          </a>
          <a href="">
            <p className="pl-8 pr-8">Apparel</p>
          </a>
        </nav>

        <div className="pl-8 pr-8">
          <img src={uniqueLogo} alt="unique logo" />
        </div>

        <nav className="flex flex-row self-center">
          <a href="">
            <p className="pl-8 pr-8">About us</p>
          </a>

          <a href="">
            <p className="pl-8 pr-8 text-[#c30022]">Sale</p>
          </a>
        </nav>
      </div>

      {/* actions */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-4 z-60">
        <button className="rounded hover:bg-gray-100">
          <IoPersonOutline className="w-6 h-6" />
        </button>
        <button className="rounded hover:bg-gray-100">
          <HiOutlineShoppingBag className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Header;
