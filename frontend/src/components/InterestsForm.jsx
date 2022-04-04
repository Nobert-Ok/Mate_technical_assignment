import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/interests/interestSlice'

function InterestForm() {
  const [formData, setFormData] = useState({
    interests: '',
    preferences: ''
  })

  const { interests, preferences } = formData


  const dispatch = useDispatch()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      interests,
      preferences,
    }

    dispatch(createGoal(userData))
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Interests</label>
          <input
              type='text'
              className='form-control'
              id='interests'
              name='interests'
              value={interests}
              placeholder='Enter your email'
              onChange={onChange}
              required
          />
          <label htmlFor='text'>Preferences</label>
          <input
              type='text'
              className='form-control'
              id='preferences'
              name='preferences'
              value={preferences}
              placeholder='Enter your email'
              onChange={onChange}
              required
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default InterestForm