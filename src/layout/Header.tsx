import { MdArrowDropDown } from "react-icons/md"
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <header>
      <div id="stripe">
        <p id="left">Hello Everyone 25% Off All products</p>

        <div id="right">
          <p className="settings">USD <MdArrowDropDown size={20} color="white"/></p>
          <p className="settings">ENGLISH <MdArrowDropDown size={20} color="white"/></p>
        </div>
      </div>

      <div id="main">
        <div id="top">
          <div id="phone-wrapper">
            <div id="phone"><FaPhoneAlt size={24} color="white"/></div>
            <p>+00 123 456 789</p>
          </div>

          <a id="logo" href="/">
            <img src="https://htmldemo.net/pronia/pronia/assets/images/logo/dark.png" />
          </a>

          <div id="pages">
            <a href="/cart"><CiShoppingCart size={24} color="#525252"/></a>
            <a href="/admin"><CiUser size={24} color="#525252"/></a>
            <a href="/" id="bars"><HiBars3 size={24} color="#525252"/></a>
          </div>
        </div>
        <div id="bottom">
          <ul>
            <a href="/">Home</a>
            <a href="/">Shop</a>
            <a href="/">Blog</a>
            <a href="/">About Us</a>
            <a href="/">Pages</a>
            <a href="/">Contact Us</a>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header