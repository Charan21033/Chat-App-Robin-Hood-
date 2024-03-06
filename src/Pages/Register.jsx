import Add from "../img/addAvatar.png"
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth ,storage,db} from "../firebase"
import { useState } from "react";
 import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 import { doc, setDoc } from "firebase/firestore"; 
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
 const [err,setErr] = useState(false);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

  const date = new Date().getTime();
const storageRef = ref(storage, `${displayName + date}`);

await uploadBytesResumable(storageRef, file).then(()=>{
  getDownloadURL(storageRef).then(async (downloadURL)=> {
    try {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      });

      await setDoc(doc(db, "users", res.user.uid),{
        uid :res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
     });
await setDoc(doc(db, "userChats",res.user.uid ),{});
navigate("/")
window.location.reload();

    } catch (error) {
      console.log(error)
      setErr(true)
      setLoading(false)
    }
  })
})


} catch (error) {
  setErr(true);
  setLoading(false)
}


 

}


  return (
    <div className="formContainer" >
        <div className="formWrapper" >
            <span className="logo" >Robin Hood</span>
            <span className="title" >Register</span>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="display name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input style={{display:"none"}} type="file" id="file"  />
                <label htmlFor="file" >
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button disabled={loading} >Sign up</button>
                {loading && "Uploading and compressing the image plsease wait"}
                {err && <span>Something went wrong </span>}
                
            </form>
            <p>You do have account? <Link to="/login" >Login</Link> </p>
        </div>
    </div>
  );
};

export default Register;