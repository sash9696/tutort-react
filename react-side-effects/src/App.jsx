import React, { useEffect, useState } from "react";

function App() {
  //make a api call and get the actual data from the server
  const [users, setUsers] = useState([]);

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(json => setUsers(json))
  //infinite loop

  async function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => setUsers(json));
  }
  useEffect(() => {
    getUsers()
  }, []);


  return (
    <div>
      {users.map((user) => {
        return <h3 key={user.id}>{user.name}</h3>;
      })}
    </div>
  );
}

export default App;
