
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import AllUsers from '../components/AllUsers'

import { stockData } from "../data";


function Userprofiles() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { interests, isLoading, isError, message } = useSelector(
    (state) => state.interests
  )
 

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
  }, [user, navigate, isError, message, dispatch])


  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <p>Other profiles</p>
      </section>
      <section className='content'>
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