import React from 'react'
import fire from '../config/firebase';

const Home = ({ user }) => {

  const logout = () => fire.auth().signOut()

  return (
    <div style={ { margin: "50px" } }>
      <h1>You are logged in...</h1>
      <img src={ user.photoURL } alt="Smiley face" />
      <h5>{ user.email }</h5>
      <h5>{ user.displayName }</h5>
      <button
        className="btn waves-effect waves-light col s3"
        onClick={ logout }>Logout</button>
    </div >
  )
}

export default Home
