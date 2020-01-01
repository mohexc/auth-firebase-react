import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase"
import fire from '../config/firebase'
import M from 'materialize-css/dist/js/materialize.min.js'


const Login = () => {
  const [err, setErr] = useState(null)

  useEffect(() => {
    if (err) setTimeout(() => setErr(null), 1500)

    // eslint-disable-next-line
  }, [err])

  const login = () => {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => M.toast({ html: "Successfully Logged in" }))
      .catch((err) => setErr(err.message));
  }

  const sigUp = () => {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => M.toast({ html: "Successfully Signed up" }))
      .catch((err) => setErr(err.message));
  }

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: { signInSuccess: () => false }
  }

  return (
    <div className='row ' id="login" style={ { marginTop: "100px" } } >
      <div className='col s12   blue lighten-4 z-depth-5 ' style={ { padding: '50px' } }>
        <h3 className="center-align">Login</h3>
        { err && <p className="red white-text" style={ { padding: '10px', fontSize: "1.5rem" } }>{ err }</p> }
        <div className="col s6">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="validate" />
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="validate" />
          </div>
          <div className="row">
            <button
              className="btn waves-effect waves-light col s3 "
              onClick={ login }
            >Login</button>
            <button
              className="btn waves-effect waves-light col s3 offset-s6"
              onClick={ sigUp }
            >Sign Up</button>
          </div>
        </div>
        <div className="col s6">
          <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={ fire.auth() } />
        </div>
      </div>
    </div>

  )
}



export default Login
