import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {sendemail} from '../features/auth/authSlice'



function AllUsers({ allUser }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)


  const [buttonText, setButtonText] = useState("Click to match"); 
  const changeText = (text) => setButtonText(text);


  const handleClick = () => {
    setButtonText("✔ Successfully matched")
    console.log(`user ${user.email} clicked ${buttonText}`);

    dispatch(sendemail())

  }

return (
  <div className='goal'>
    <br></br>
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