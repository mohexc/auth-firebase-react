import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import fire from './config/firebase'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    M.AutoInit()
    authListener()

    console.log(user)
  }, [user])

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) setUser(user)
      else setUser(null)
    })
  }


  return (
    <div className="container">
      { user ? <Home user={ user } /> : <Login /> }
    </div>
  )
}

export default App;
