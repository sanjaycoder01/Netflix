import React from "react";

const validationform = (email, password, fullname) => {
  const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const ispasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isfullname = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(fullname);

  if (!isemailvalid) return "Email not valid";
  if (!ispasswordvalid) return "password not valid";
  if (!isfullname) return "Name not valid";

  return null;
};

export default validationform;
