import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> |&nbsp;
        <Link to="/signup">Signup</Link> |&nbsp;
        <Link to="/login">Login</Link> |&nbsp;
        <Link to={LogoutLink}>Logout</Link> |&nbsp;
        <Link to="/new">New Product</Link> |&nbsp;
        <Link to="/products">Products Index</Link> |&nbsp;
        <Link to="/my_cart">My Cart</Link>&nbsp;
      </nav>
    </header>
  )
}