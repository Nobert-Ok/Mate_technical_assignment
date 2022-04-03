
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import AllUsers from '../components/AllUsers'
import { getUsers } from '../features/users/userSlice'
import {getallinterests} from '../features/allinterest/allinterestSlice'
import { reset } from '../features/auth/authSlice'

import { stockData } from "../data";


function Userprofiles() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { interests, isLoading, isError, message } = useSelector(
    (state) => state.interests
  )
  // const { allinterests } = useSelector((state) => state.allinterests)
  // const { allUsers } = useSelector((state) => state.allusers)


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    // if (!user) {
    //   navigate('/login')
    // }

    // dispatch(getallinterests())
    // dispatch(getUsers())



    // return () => {
    //   dispatch(reset())
    // }
  }, [user, navigate, isError, message, dispatch])


  // const userinterest = allinterests.filter(allinterest => allinterest.user === '624465b4126151fc1a10483f')
  // console.log(allUsers)
  // console.log(allinterests)
  // console.log(user)

  // const allusers = allUsers.map(users => users._id)
  // console.log(allusers)

  // const userId = allinterests.map(allinterest => allinterest._id)
  // console.log(userId)
  // console.log(stockData)
  // console.log(user.email)



  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        {/* <h1>Welcome {user && user.name}</h1> */}
        {/* <h1>{user && user.email}</h1> */}
        <p>View other interests and preferences</p>
      </section>

      <section className='content'>
        {/* {allUsers.length > 0 ? (
          <div className='goals'>
            {allUsers.map((allUser) => (
              <AllUsers key={allUser._id} allUser={allUser} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )} */}
        {stockData.length > 0 ? (
          <div className='goals'>
            {stockData.map((data) => (
              <AllUsers key={data._id} allUser={data} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      
      </section>
    </>
  )
}

export default Userprofiles