import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import styles from "./styles.module.css";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClassName: "",
  });
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email must be valid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
  });

  const onSubmit = (values) => {
    axios
      .post(Endpoints.LOGIN_URL, values)
      .then(
        (response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setRequestResponse({
            textMessage: "Hello " + response.data.user.firstName,
            alertClassName: "alert alert-success",
          });
          navigate("/");
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
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />

                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />

                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>

            <br />
            <p className="text-center">
              New User? <Link to="/register">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
