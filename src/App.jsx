import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.log("App :: useEffect :: error :: ", error);
      })
      .finally(() => {
        setLoading(false)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO{/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}
export default App
