import './App.css'
import { useEffect, useState } from 'react'
import authservice from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authservice.getcurruser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
 
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <Outlet/> */}
          <Outlet />
          Todo
        </main>
        <Footer/>
        </div> 
      </div>
  ):null

}

export default App
