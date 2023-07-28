import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
 /*const createUser = async (email, password) => {
    try {
      await axios
        .post("http://localhost:5000/api/login", { email, password })
        .then((user) => {
          sessionStorage.setItem("user", JSON.stringify(user.data));
           setIsloaded(true)
        
        });
    } catch (e) {
      console.log(e);
    }
  };*/
  const Userlogin = async (email, password) => {
    try {
      await axios
        .post("http://localhost:8000/api/login", { email, password })
        .then((user) => {

          sessionStorage.setItem("user", JSON.stringify(user.data));
          // const users= JSON.parse(sessionStorage.getItem("user"));
          // setUserData(user.data)
        });
    } catch (e) {
      throw new Error("User Not Found")
    }
  };

  // const signIn = (email, password) => {
  //   return;
  // };

  const logout = () => {
    return sessionStorage.removeItem('user');
  };
  // useEffect(() => {
  //   // Perform localStorage action
  //     const user= JSON.parse(sessionStorage.getItem("user"));
  //     setUserData(user)
  //     console.log("auth useEffect")
    
  // }, [isloaded])
 
  return (
    <UserContext.Provider
      value={{ /*createUser*/ logout, Userlogin, }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

