


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from './actions';

// function RegistrationForm() {


//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
    
//     // Dispatch the registerUser action with the form data
//     dispatch(registerUser({ username, email, password }));

//     // Reset the form fields
//     setUsername('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={e => setUsername(e.target.value)}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default RegistrationForm;



