const Header = () => {
  return (
    <div className="jumbotron" style={{ marginTop: "2rem" }}>
      <h1 className="display-4">MyGroceryApp</h1>
      <p className="lead">
        A demo grocery project is created for learning ReactJS.
      </p>
      <hr className="my-4" />
      <p>
        This Project is designed and develop by my trainer and We are following
        the same with few our flavours.
      </p>
      {/* <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p> */}
    </div>
  );
};
export default Header;
