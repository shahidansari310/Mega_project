import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication=true}){
    
    const navigate=useNavigate()
    const [load, setLoad] = useState(true)
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(() => {
        if(authentication && authStatus!==authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoad(false)
    }, [authStatus,navigate,authentication])

  return load ? <h1>Loading.....</h1>:<>{children}</>
}
