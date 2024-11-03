import styles from "./styles.module.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h2>Login</h2>
            <hr />
            <form>
             

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" />
              </div>

            

              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
              </div>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
             New User? <a href="/register">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
