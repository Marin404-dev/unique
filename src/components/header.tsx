import { NavLink } from "react-router-dom";
import uniqueLogo from "../assets/unique_logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  const navLinksLeft = [
    { name: "Home", path: "/" },
    { name: "Apparel", path: "/apparel" },
  ];

  const navLinksRight = [
    { name: "About us", path: "/about" },
    { name: "Sale", path: "/sale" },
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `pl-8 pr-8 relative py-3 ${
      isActive
        ? "after:absolute after:bottom-[-13px] after:left-0 after:w-12 after:h-[2px] after:bg-black after:left-1/2 after:-translate-x-1/2"
        : ""
    }`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-center p-3 border-b border-[#dadada] shadow">
      <div className="flex flex-1 justify-center items-center">
        {/* Left nav */}
        <nav className="flex flex-row">
          {navLinksLeft.map((link) => (
            <NavLink key={link.name} to={link.path} className={navLinkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Logo */}
        <div className="pl-8 pr-8">
          <img src={uniqueLogo} alt="unique logo" />
        </div>

        {/* Right nav */}
        <nav className="flex flex-row">
          {navLinksRight.map((link) => (
            <NavLink key={link.name} to={link.path} className={navLinkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Actions */}
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
