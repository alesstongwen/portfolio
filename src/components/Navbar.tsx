import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <ul className="flex space-x-6 text-sm font-medium text-gray-600">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>{" "}
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="/photography">Photography</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
