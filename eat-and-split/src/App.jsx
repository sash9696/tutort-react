import React, { useState } from "react";

const initialFriends = [
  {
    id: 1,
    name: "John",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 2,
    name: "Peter",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 3,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button ({children, onClick}){
  console.log(children)
  return <button className="button" onClick={onClick} >{children}</button>

}
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);



  function handleShowAddFriend(){
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(friend){
    // setFriends(friends => [...friends,friend])

    const newFriends = friends.slice();

    newFriends.push(friend);

    setFriends(newFriends);
    setShowAddFriend(false);
  }

  function handleSelection(friend){
    // setSelectedFriend(friend);
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection} />
       {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />} 
        <Button onClick={handleShowAddFriend} >
          {showAddFriend ? "Close" : "Add friend" }
          </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend ={selectedFriend} /> } 
    </div>
  );
}

function FriendsList({friends,selectedFriend, onSelection}) {
  
  return (
    <ul>
      {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelection={onSelection} />
      ))}
    </ul>
  );
}

function Friend({friend,selectedFriend,onSelection}){

  const isSelected = selectedFriend?.id === friend.id; 
  return (
    <li className={isSelected ? "selected" : ""}>
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {friend.balance < 0 && (
      <p className="red">
          You owe {friend.name} { Math.abs(friend.balance)}&#8377;
      </p>
    )}

  {friend.balance > 0 && (
      <p className="green">
           {friend.name} owes you { Math.abs(friend.balance)}&#8377;
      </p>
    )}

  {friend.balance === 0 && (
      <p>
          You and {friend.name} are even.
      </p>
    )}

        <Button onClick={() => onSelection(friend)} >

          {isSelected ? "Close" : "Select"}
          
        </Button>
  </li>
  )
}




function FormAddFriend({onAddFriend}){
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleSubmit(e){
    e.preventDefault();

    if(!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image,
      balance:0,
    }
    // console.log(newFriend);
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=499476")
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>🤡 Friend name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>🏞 Image URL</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

        <Button>
          Add
        </Button>
    </form>
  )
}


function FormSplitBill({selectedFriend}){
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💲 Bill value</label>
      <input type="text"/>

      <label>✅ Your expense</label>
      <input type="text"/>

      <label>✅ {selectedFriend.name}'s expense</label>
      <input type="text" disabled/>

      <label>✅ Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>

      </select>

      

      <Button>Split Bill</Button>
    </form>
  )
}