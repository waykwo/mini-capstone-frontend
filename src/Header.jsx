import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    console.log("Logged out");
    authenticationLinks = (
      <>
        <Link to="/login">Login</Link> |&nbsp;
        <Link to="/signup">Signup</Link> |&nbsp;
      </>
    )
  } else {
    console.log("Logged in");
    authenticationLinks = (
      <LogoutLink />        
    )
   };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/new">New Product</Link> |&nbsp;
        <Link to="/products">Products Index</Link> |&nbsp;
        <Link to="/my_cart">My Cart</Link>&nbsp;
        <div>
          {authenticationLinks}
        </div>
      </nav>
    </header>
  )
}