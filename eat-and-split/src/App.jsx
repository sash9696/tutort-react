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
function Button({ children, onClick }) {
  console.log(children);
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  console.log(friends);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    // setFriends(friends => [...friends,friend])

    const newFriends = friends.slice();

    newFriends.push(friend);

    setFriends(newFriends);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
  }

  function handleSplitBill(value) {
    console.log(value);

    // setFriends((friends) =>
    //   friends.map((friend) =>
    //     friend.id === selectedFriend.id
    //       ? { ...friend, balance: friend.balance + value }
    //       : friend
    //   )
    // );
    //or
    // setFriends(function (friends) {
    //   return friends.map(function (friend) {
    //     console.log({friend,selectedFriend})
    //     if (friend.id === selectedFriend.id) {
    //       return { ...friend, balance: friend.balance + value };
    //     } else {
    //       return friend;
    //     }
    //   });
    // });

    //or

    let newFriends = friends
      .slice()
      .map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      );

    setFriends(newFriends);

    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}&#8377;
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}&#8377;
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image,
      balance: 0,
    };
    // console.log(newFriend);
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤡 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🏞 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  //controlled elements or controlled components
  //controlled components =>form handling with state + onChange
  //uncontrolled components => form handling using useRef (direct DOM manipulatiing)

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  // const [formState, setFormState] = useState({
  //   bill:"",
  //   paidByUser:"",
  //   whoIsPaying:"user"
  // });

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💲 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      {/* <input type="text" value={formState.bill} onChange={(e) => setFormState({...formState, bill:e.target.value})} /> */}

      <label>✅ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>✅ {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>✅ Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}


//small component size
//u can end having 100's of mini components
//confusing codebase
//too abstracted => hides the logic 


//large component size

//too many logics
//might need too many props
//hard to reuse
//complex code , difficult to understand



//mid component size
//start with a relatively big component then divide it into smaller components
//when necessary


