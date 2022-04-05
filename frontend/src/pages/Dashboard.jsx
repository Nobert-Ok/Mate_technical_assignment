import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import InterestForm from '../components/InterestsForm'
import InterestItem from '../components/InterestItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/interests/interestSlice'

function Dashboard() {
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

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    // return () => {
    //   dispatch(reset())
    // }
  }, [navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome to Mate</h1>
        <InterestForm />

        <p>Your Interests and Preferences</p>
      </section>
      <section className='content'>
        {interests.length > 0 ? (
          <div className='goals'>
            {interests.map((interest) => (
              <InterestItem key={interest._id} interest={interest} />
            ))}
          </div>
        ) : (
          <h3>You have not set any interests or preferences, enter your interests and preferences</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard