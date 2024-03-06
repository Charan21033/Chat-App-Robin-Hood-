import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [nil, setNill] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const UserRef = collection(db, "users");
    // console.log(q)
    const q = query(UserRef, where("displayName", "==", `${userName}`));
    // console.log("q", q, q.displayName);
    // console.log(userName); // Check the value of userName

    try {
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot.size);
      // console.log(querySnapshot.docs);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });

      if (querySnapshot.size === 0) setNill(true);
      else setNill(false);
    } catch (error) {
      console.error("error fetching users:", error);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async () => {
   
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //creating  a chat in chats ....

        await setDoc(doc (db, "chats", combinedId), { messages: [] });
        //// creating user chats updates..

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    setUser(null)
    setUserName("")
  };
    
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      {err && <span>Technical Error !!!</span>}
      {nil && <span>No user Found </span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt={user.displayName} />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>)}
  
    </div>
    
  )
}

export default Search;
