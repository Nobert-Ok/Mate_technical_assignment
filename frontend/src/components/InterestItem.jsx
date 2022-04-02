import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/interests/interestSlice'

function InterestItem({ interest }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <h2>Interest: {interest.interests}</h2>
      <h2>Preference: {interest.preferences}</h2>
      <button onClick={() => dispatch(deleteGoal(interest._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default InterestItem