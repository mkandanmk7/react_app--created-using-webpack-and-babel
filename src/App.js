import React, { useEffect } from 'react'
import SignUp from './component/SignUp'
import Users from './component/Users'

const App = () => {



  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <Users />
      </div>
    </div>
  )
}

export default App