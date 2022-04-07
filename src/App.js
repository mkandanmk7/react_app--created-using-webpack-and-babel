import React, { useEffect, useContext } from 'react'
import SignUp from './component/SignUp'
import Users from './component/Users'
import { Context } from './context/Context';
import ThemeContext from './context/ThemeContext';

const App = () => {


  const details = useContext(Context);
  console.log(details)
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <Users />
        <br />
        <ThemeContext />
      </div>
    </div>
  )
}

export default App