import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-conainer">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
        />
      </div>
      <a href="#">
        <FiHeart className="nav-icons" />
      </a>
      <a href="#">
        <AiOutlineShoppingCart className="nav-icons" />
      </a>
      <a href="#">
        <AiOutlineUserAdd className="nav-icons" />
      </a>
    </nav>
  );
}
export default Nav;
