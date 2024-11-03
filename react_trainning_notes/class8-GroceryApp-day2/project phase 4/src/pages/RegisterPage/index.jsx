import React, { useState } from "react";
import styles from "./styles.module.css";

const RegisterPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h2>Register</h2>
            <hr />
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={user.firstName}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  value={user.mobile}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={onChangeHandler}
                />
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              Already registered? <a href="/login">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
