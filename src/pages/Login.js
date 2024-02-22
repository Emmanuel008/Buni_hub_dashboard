/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const {username, password} = values
      await axios.post("http://localhost:8081/api/admin/login", {
        username, password
      }).then(res =>{
        console.log(res)
        if(res.status === 200){
          navigate("/dashboard");
        }
      })
    } catch (error) {
      
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="/login">
            <b>BUNI</b>HUB
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
           <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit ={handleSubmit}className="pt-5 pb-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  name="username"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mb-1">
              <a href="">I forgot my password</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
};

export default Login;
