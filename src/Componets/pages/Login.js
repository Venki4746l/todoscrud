import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {   useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  useEffect(()=>{
    const token =Cookies.get("token")
  if(token !==undefined){
    navigate("/",{replace:true})
  }

  },[navigate])

  const onSubmitHadler = async (e) => {
    e.preventDefault();

    try {
      const credintials = {
        username: username,
        password: password,
      };
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credintials
      );
      console.log(response);
      if (response.status === 200) {
        console.log(response.data.token);

        Cookies.set("token", response.data.token, { expires: 30 });

        navigate("/", {replace:false} )
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHadler} className="formContainer">
        <div className="form-group">
          <label htmlFor="inputUsername">Useranme</label>
          <input
            type="text"
            className="form-control"
            value={username}
            id="inputUsername"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            id="inputPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
      <div>
        <p> username: mor_2314</p>
        <p> password: 83r5^_</p>
      </div>
    </div>
  );
};

export default Login;
