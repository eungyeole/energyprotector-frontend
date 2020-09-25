import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../actions/userAction";

export default function (Componet, option, adminRoute = null) {
  function AuthCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(authUser()).then((res) => {
        console.log(res);
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && res.payload.isAdmin) {
          } else {
            if (!option) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <Componet />;
  }

  return AuthCheck;
}