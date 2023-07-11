import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Login from "../../pages/login";

function VerifyEmail() {
  let location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    axios.get(`http://localhost:8111/login/check-email-token?token=${token}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [location]);

  return (
    <>
        <div>Email Verification Page</div>
        <Login/>
    
    </>
  )
}

export default VerifyEmail;
