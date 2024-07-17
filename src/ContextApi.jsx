import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
const ContextApi = () => {
    return (
        <UserContextProvider>
        <Login/>
        <Profile/>
        </UserContextProvider>
      )
}

export default ContextApi

