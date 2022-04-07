import axios from 'axios'
import React, { createContext, useEffect } from 'react'
import ThemeComp from './ThemeComp'
const dark =
{
    foreground: '#ffffff',
    background: '#ff00ff',
}
export const Theme = createContext(dark)
const ThemeContext = () => {

    const getUsers = async () => {
        console.log("in get users")
        const details = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log('details', details)
    }

    // setUsersDetails(users.data);

    useEffect(() => {
        getUsers()

        console.log("mounted")
    }, [])
    return (

        <ThemeComp />

    )
}

export default ThemeContext