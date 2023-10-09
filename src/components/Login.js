// import React, { useRef, useState } from "react";
// import Header from "./Header";
// import validationform from "../utils/validationform";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// // import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { BG_URL, USER_AVATAR } from "../utils/constants";
// const Login = () => {
//   const [issignin, setsignin] = useState(true);
//   const email = useRef(null);
//   const password = useRef(null);
//   const fullname = useRef(null);

//   const dispatch = useDispatch();
//   const [errorMessage, seterrorMessage] = useState(null);
//   // const handlebutton = () => {
//   //   const message = validationform(
//   //     email.current.value,
//   //     password.current.value,
//   //     fullname.current.value
//   //   );

//   //   // Check if the message variable is null
//   //   if (message !== null) {
//   //     seterrorMessage(message);
//   //   }

//   //   if (message) return;
//   //   //above code means message contains error so dont want to continue return from here or contains null we can create a new user for sign up
//   //   //Sign up logic
//   //   if (!issignin) {
//   //     //sign up logic
//   //     createUserWithEmailAndPassword(
//   //       auth,
//   //       email.current.value,
//   //       password.current.value
//   //     )
//   //       .then((userCredential) => {
//   //         // Signed in
//   //         const user = userCredential.user;
//   //         // console.log(user);
//   //         // ...
//   //         navigate("/browse");
//   //       })
//   //       .catch((error) => {
//   //         const errorCode = error.code;
//   //         const errorMessage = error.message;
//   //         seterrorMessage(errorCode + "-" + errorMessage);
//   //         // ..
//   //       });
//   //   } else {
//   //     //sign in logic
//   //     signInWithEmailAndPassword(
//   //       auth,
//   //       email.current.value,
//   //       password.current.value
//   //     )
//   //       .then((userCredential) => {
//   //         // Signed in
//   //         const user = userCredential.user;
//   //         console.log(user);
//   //         // ...
//   //         navigate("/browse");
//   //       })
//   //       .catch((error) => {
//   //         const errorCode = error.code;
//   //         const errorMessage = error.message;
//   //         seterrorMessage(errorCode + "-" + errorMessage);
//   //       });
//   //   }
//   // };
//   const handlebutton = () => {
//     // Validate the form and get an error message
//     const message = validationform(
//       email.current?.value,
//       password.current?.value,
//       fullname.current?.value
//     );
//     seterrorMessage(message);

//     if (message) {
//       // If there is an error message, return early and do not proceed
//       return;
//     }

//     // Sign up logic
//     if (!issignin) {
//       createUserWithEmailAndPassword(
//         auth,
//         email.current?.value,
//         password.current?.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           updateProfile(user, {
//             displayName: "name.current.value",
//             photoURL: USER_AVATAR,
//           })
//             .then(() => {
//               // Profile updated!
//               const { uid, email, displayName, photoURL } = auth.currentUser;
//               dispatch(
//                 addUser({
//                   uid: uid,
//                   email: email,
//                   displayName: displayName,
//                   photoURL: photoURL,
//                 })
//               );
//               // navigate("/browse");
//             })
//             .catch((error) => {
//               // An error occurred
//               // ...
//               seterrorMessage(error.message);
//             });
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           seterrorMessage(errorCode + "-" + errorMessage);
//         });
//     } else {
//       // Sign in logic
//       signInWithEmailAndPassword(
//         auth,
//         email.current?.value,
//         password.current?.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           // console.log(user);
//           // navigate("/browse");
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           seterrorMessage(errorCode + "-" + errorMessage);
//         });
//     }
//   };

//   const togglesign = () => {
//     setsignin(!issignin);
//   };
//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         <img src={BG_URL} alt="logo" />
//       </div>
//       {/* <form
//         onSubmit={(e) => e.preventDefault()}
//         className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
//       >
//         <h1 className="font-bold text-3xl py-4">
//           {issignin ? "Sign In" : "Sign Up"}
//         </h1>
//         {issignin ? (
//           ""
//         ) : (
//           <input
//             ref={fullname}
//             type="text"
//             placeholder="Full Name"
//             className="py-2 m-4 w-full bg-gray-800"
//           />
//         )}
//         <p className="text-red-500  px-4">{errorMessage}</p>
//         <input
//           ref={email}
//           type="text"
//           placeholder="Email Address"
//           className="py-2 m-4 w-full bg-gray-800 text-xl"
//         />
//         <p className="text-red-500  px-4">{errorMessage}</p>
//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="py-2 m-4 w-full  bg-gray-800"
//         />
//         <p className="text-red-500  px-4">{errorMessage}</p>

//         <button
//           className="py-4 m-4 bg-red-700 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-lg"
//           onClick={handlebutton}
//         >
//           {issignin ? "Sign In" : "Sign Up"}
//         </button>
//         <p className="py-2 mx-4 cursor-pointer" onClick={togglesign}>
//           {issignin
//             ? "New to Netflix?Sign Up Now"
//             : "Already registerd?Sign In Now"}
//         </p>
//       </form> */}
//       // ... (previous code)
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
//       >
//         <h1 className="font-bold text-3xl py-4">
//           {issignin ? "Sign In" : "Sign Up"}
//         </h1>
//         {issignin ? (
//           ""
//         ) : (
//           <div>
//             <input
//               ref={fullname}
//               type="text"
//               placeholder="Full Name"
//               className="py-2 m-4 w-full bg-gray-800"
//             />
//             <p className="text-red-500 px-4">{errorMessage}</p>
//           </div>
//         )}
//         <div>
//           <input
//             ref={email}
//             type="text"
//             placeholder="Email Address"
//             className="py-2 m-4 w-full bg-gray-800 text-xl"
//           />
//           <p className="text-red-500 px-4">{errorMessage}</p>
//         </div>
//         <div>
//           <input
//             ref={password}
//             type="password"
//             placeholder="Password"
//             className="py-2 m-4 w-full bg-gray-800"
//           />
//           <p className="text-red-500 px-4">{errorMessage}</p>
//         </div>
//         <button
//           className="py-4 m-4 bg-red-700 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-lg"
//           onClick={handlebutton}
//         >
//           {issignin ? "Sign In" : "Sign Up"}
//         </button>
//         <p className="py-2 mx-4 cursor-pointer" onClick={togglesign}>
//           {issignin
//             ? "New to Netflix?Sign Up Now"
//             : "Already registered? Sign In Now"}
//         </p>
//       </form>
//     </div>
//   );
// };

import { useState, useRef } from "react";
import Header from "./Header";

import validationform from "../utils/validationform";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    const message = validationform(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{ backgroundImage: `url(${BG_URL})` }}
        className="px-12 xs:px-5 py-4 xs:py-3 bg-blend-multiply bg-black bg-opacity-10 flex items-center justify-center bg-cover bg-center h-screen"
      >
        <div className="w-full max-w-sm	 bg-black px-16 xs:px-12 sm:py-10 py-12 bg-opacity-70 rounded">
          <h1 className="text-3xl text-white font-medium mb-8 xs:mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <p className="text-red-600 text-sm font-medium mb-3">
              {errorMessage}
            </p>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="mb-8 px-4 py-3 rounded validationform"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="mb-8 px-4 py-3 rounded focus:outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="mb-8 px-4 py-3 rounded focus:outline-none"
            />

            <button
              onClick={handleButtonClick}
              className=" bg-red-600 text-white px-4 py-3 rounded font-medium text-base"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            className="text-white text-xl font-normal mt-3 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already Registerd? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
