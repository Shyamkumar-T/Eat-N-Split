import { useState } from "react";

const initialFriends = [];

function Button({ children, onClick }) {
  return (
    <button className="button tool" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [Friends, AddFriend] = useState(initialFriends);
  const [showSplit, setShowSplit] = useState(false);
  const [activeSplit, setActiveSplit] = useState(null);
  function handleAddFriend() {
    setAddFriend((show) => !show);
  }
  function handleAddingFriend(Friend) {
    AddFriend((friends) => [...friends, Friend]);
  }
  function handleSelect(friend) {
    setActiveSplit((current) => (current?.id === friend.id ? null : friend));
    setShowSplit((show) => !show);
  }
  function handleSplit(value) {
    AddFriend((friends) =>
      friends.map((friend) =>
        friend.id === activeSplit.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
  }
  return (
    <div className="App">
      <div className="sidebar">
        <FriendList
          Friends={Friends}
          handleSelect={handleSelect}
          selectedFriend={activeSplit}
          showSplit={showSplit}
        />
        {addFriend && <FormAddFriend onAddFriend={handleAddingFriend} />}
        <Button onClick={handleAddFriend}>
          {addFriend === true ? "Close" : "AddFriend"}
        </Button>
      </div>
      {showSplit && (
        <FormSplitBill friend={activeSplit} onSplitBill={handleSplit} />
      )}
    </div>
  );
}
function FriendList({ Friends, handleSelect, selectedFriend, showSplit }) {
  const friends = Friends;
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            handleSelect={handleSelect}
            key={friend.id}
            selectedFriend={selectedFriend}
            showSplit={showSplit}
          />
        ))}
      </ul>
    </>
  );
}
function Friend({ friend, handleSelect, selectedFriend, showSplit }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li>
      <img src={friend.image} alt={friend.name} className="tool" />
      <h3 className="tool">{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red tool">
          You owe {friend.name} ₹{Math.abs(friend.balance)}
        </p>
      ) : friend.balance !== 0 ? (
        <p className="green tool">
          {friend.name} owe you ₹{friend.balance}
        </p>
      ) : (
        <p className="black tool">{friend.name} and You are even</p>
      )}
      {isSelected && (
        <Button onClick={() => handleSelect(friend)}>Close</Button>
      )}
      {!showSplit && (
        <Button onClick={() => handleSelect(friend)}>Select</Button>
      )}
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://randomuser.me/api/portraits/men/76.jpg",
  );
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Please anter a name");
      return;
    }
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://randomuser.me/api/portraits/men/76.jpg");
  }
  return (
    <div className="add-friend">
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <div className="label">
          <label>Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br></br>
        <div className="label">
          <label className="label">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-add label">
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
}
function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) {
      return;
    }
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <div className="split-bill">
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split A Bill with {friend.name}</h2>
        <div className="label">
          <label>Bill Value : </label>
          <input
            type="text"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <br></br>
        <div className="label">
          <label>Your expense : </label>
          <input
            type="text"
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value),
              )
            }
          />
        </div>
        <br></br>
        <div className="label">
          <label>{friend.name}'s Expense : </label>
          <input type="text" disabled value={paidByFriend} />
        </div>
        <div className="label">
          <label>Who is paying the bill</label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{friend.name}</option>
          </select>
        </div>
        <Button>Split Bill</Button>
      </form>
    </div>
  );
}
