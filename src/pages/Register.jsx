import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  USER_LOGOUT,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from "../actions/types";
import { API_BASE, BASE } from "../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./authform.css";

function Register() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispach = useDispatch();

  const registerAction = () => {
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispach({ type: USER_REGISTER_START });
    axios
      .post(API_BASE + "register", user)
      .then(function (response) {
        console.log(response);
        //console.log(response.data.jwt);
        dispach({ type: USER_REGISTER_SUCCESS, payload: response.data });
        navigate(BASE);
      })
      .catch(function (error) {
        dispach({ type: USER_LOGOUT });
        console.log(error);
      });
  };

  return (
    <div className="card my-form-card">
      <div className="card-body">
        <h3 className="card-title">Register</h3>
        <div className="card-text">
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="form-control"
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={registerAction}
        >
          Register
        </button>
      </div>
    </div>
  );
}
export default Register;
