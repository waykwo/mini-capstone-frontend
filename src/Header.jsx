import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <Link to={LogoutLink}>Logout</Link> | <Link to="/new">New Product</Link> | <Link to="/products">Products Index</Link>
      </nav>
    </header>
  )
}