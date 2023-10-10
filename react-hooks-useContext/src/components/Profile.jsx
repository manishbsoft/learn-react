import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Card from "./Card";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="profile-container">
        <h2 className="profile-name">Please login to see user profile</h2>
      </div>
    );

  return (
    <div className="profile-container">
      <Card />
      <p className="profile-bio">
        Web Developer based in New York. Passionate about tech, nature, and
        photography.
      </p>
      <ul className="profile-details">
        <li>
          <strong>Email:</strong> {user.username}@example.com
        </li>
        <li>
          <strong>Location:</strong> New York, USA
        </li>
        <li>
          <strong>Joined:</strong> January 2020
        </li>
      </ul>
    </div>
  );
}

export default Profile;
