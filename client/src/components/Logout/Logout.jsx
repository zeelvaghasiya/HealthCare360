import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider/ContextProvider"; ""

function Logout() {

  const {state, dispatch} = useContext(AppContext);

  const navigate = useNavigate();

  const callUserLogout = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api-patient/logout",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      dispatch({type:"USER", payload:false});
      navigate("/signin");
    }
  };

  useEffect(() => {
    callUserLogout();
  }, []);
  return (
    <>
      <h1>hey Logout !!!</h1>
    </>
  );
}

export default Logout;
