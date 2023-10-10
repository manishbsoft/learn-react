import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Card = () => {
  const { user } = useContext(UserContext);
  console.log('card->', user);
  return <h1 className="profile-name">Welcome, {user.username}</h1>;
};

export default Card;
