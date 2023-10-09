import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import showGptSearch from "../utils/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptheader = useSelector((store) => store.gpt.showGptSearch);
  const handlegptsearchclick = () => {
    //Toggle gpt search,store toggle info in redux store
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        //add uid,email,displayname in store
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex ">
          {gptheader && (
            <select
              onChange={handleLanguageChange}
              className="my-6 mr-4 cursor-pointer rounded-lg"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handlegptsearchclick}
            className="ring ring-blue-300 hover:ring-blue-500 my-6 pr-2 pl-2 cursor-pointer rounded-lg  mr-4 text-white"
          >
            {gptheader ? "Home_page" : "Gpt_Search"}
          </button>
          <img className="w-9 h-9 my-6" src={USER_AVATAR} alt="user-icon" />
          <button
            onClick={handlesignout}
            className="p-3 font-bold  text-white text-2xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
