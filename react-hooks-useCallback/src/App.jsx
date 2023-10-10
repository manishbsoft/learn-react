import { useState, useCallback } from "react";
import "./App.css";
import Search from "./search";
import { shuffle } from "./utils";
import Users from "./users";

const allUsers = ["john", "alex", "george", "simon", "james"];

const App = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text) => {

      // This will log the first user in the first render
      // Since useCallback memorize the function in first render cycle
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    }, [users]); // users

  const handleShuffle = () => {
    setUsers((prevStrings) => shuffle(prevStrings));
  };

  return (
    <>
      <h2>React Hooks: useCallback</h2>
      <div className="card">
        <div className="align-center mb-2 flex">
          <div className="search-box">
            <Search onChange={handleSearch} />
            <button className="search-button" onClick={handleShuffle}>Shuffle</button>
          </div>
        </div>
        <Users users={users} />
      </div>
    </>
  );
};

export default App;
