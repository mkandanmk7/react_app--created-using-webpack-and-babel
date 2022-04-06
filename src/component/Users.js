import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import regeneratorRuntime from "regenerator-runtime";
import regeneratorRuntime from "regenerator-runtime";

const Users = () => {

    const [usersDetails, setUsersDetails] = useState([]);
    console.log("userDetails:", usersDetails)

    const getUsers = async () => {
        console.log("in get users")
        const details = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log('details', details)
        setUsersDetails(details.data)
        // console.log("data:", data);
    }

    // setUsersDetails(users.data);

    useEffect(() => {
        getUsers()

        console.log("mounted")
    }, [])



    return (
        <div>
            {
                usersDetails.map((user) => {
                    console.log(user)
                    return <ul key={user.id}>
                        <li>{user.name} </li>
                    </ul>
                })
            }
        </div>
    )
}

export default Users