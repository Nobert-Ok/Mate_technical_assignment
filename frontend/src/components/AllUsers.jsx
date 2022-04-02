import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {sendemail} from '../features/auth/authSlice'



function AllUsers({ allUser }) {
  const [formData, setFormData] = useState({
    email: '',
  })

  const { email } = formData



  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)


  const [buttonText, setButtonText] = useState("match"); 
  const changeText = (text) => setButtonText(text);


  const handleClick = () => {
    setButtonText("✔ Successfully matched")
    // dispatch(sendemail(userData))
    setFormData((prevState) => ({
      ...prevState,
      email: user.email,
    }))

    const userData = {
      email,
    }
    console.log(`user ${userData} clicked ${buttonText}`);
    dispatch(sendemail(userData))

  }

return (
  <div className='goal'>
    <div>{new Date(allUser.createdAt).toLocaleString('en-US')}</div>
    <h2>{allUser.name}</h2>
    <button onClick={() => handleClick()} className='close'>
      {buttonText}
    </button>
    <p>finds interest in</p>
    <h2>{allUser.preferences}</h2>
    <h2>{allUser.interests}</h2>
  </div>
  )
}

export default AllUsers

// import { useDispatch } from 'react-redux'
// import { useState } from 'react'


// function AllUsers({ data }) {
// const [buttonText, setButtonText] = useState("match"); 
// //same as creating your state variable where 
// // "Next" is the default value for buttonText and setButtonText 
// // is the setter function for your state variable instead of setState
// const changeText = (text) => setButtonText(text);


//   return (
//     <div className='goal'>
//       {/* <div>{new Date(data.createdAt).toLocaleString('en-US')}</div> */}
//       <h2>{data.company}</h2>
//       {/* <button onClick={() => setButtonText("✔ Successfully matched")} className='close'>
//         {buttonText}
//       </button> */}
//       {/* <h2>{data._id}</h2> */}
//     </div>
//   )
// }

// export default AllUsers