import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-2xl font-bold tracking-wide">ALESS</h1>
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
          <a href="#">Photography</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
