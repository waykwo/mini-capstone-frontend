import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useEffect, useState } from "react";
import axios from "axios";


export function Header() {
  const [currentUser, setCurrentUser] = useState({});
  const getUserData = () => {
    console.log("getting user data");
    axios.get("http://localhost:3000/users/current.json").then(response => {
      console.log(response.data);
      setCurrentUser(response.data);
    })
  }

  useEffect(getUserData, [])

  let authenticationLinks, user;
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
    user = <>Welcome, {currentUser.name}!</>
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
          {user}
        </div>
        <div>
          {authenticationLinks}
        </div>
      </nav>
    </header>
  )
}