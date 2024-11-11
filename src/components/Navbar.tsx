import { Link } from 'react-router-dom';
import './.css/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
