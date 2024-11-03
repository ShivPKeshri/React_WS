import { useFormik } from "formik";
import styles from "./styles.module.css";
import * as Yup from "yup";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  //   const [user, setUser] = useState({});
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClassName: "",
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(Endpoints.REGISTER_URL, values)
      .then(
        (response) => {
          console.log(response);
          setRequestResponse({
            textMessage: response.data.message,
            alertClassName: "alert alert-success",
          });
        },
        (error) => {
          console.log(error);
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClassName: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("first name is required"),
    email: Yup.string()
      .required("email is required")
      .email("email should be a valid email"),
    mobile: Yup.string().required("mobile is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password should be at least 6 characters"),
  });

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "First name is required";
  //   }

  //   if (!values.lastName) {
  //     errors.lastName = "Last name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }

  //   if (!values.mobile) {
  //     errors.mobile = "mobile is required";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password name is required";
  //   }
  //   return errors;
  // };
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1
            className="text-center"
            style={{ marginTop: "1rem", color: "ButtonText" }}
          >
            <Link to="/">MyGroceryApp</Link>
          </h1>
          <div className={styles.wrapper}>
            <div className={requestResponse.alertClassName} role="alert">
              {requestResponse.textMessage}
            </div>

            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id=""
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <small className="text-danger">
                    {formik.errors.lastName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  id=""
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  id=""
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already Registered? <Link to="/login">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
