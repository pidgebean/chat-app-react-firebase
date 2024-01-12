import React from 'react'
import '../style.scss'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage} from '../firebase'
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL
            });
          });
        }
      );
    } catch(err){
      setErr(true);
    }
    
      
    
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='display name'/>
            <input type="email" name="" id="" placeholder='email'/>
            <input type="password" name="" id="" placeholder='password'/>
            <input style={{display:"none"}} type="file" name="" id="file" />
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
