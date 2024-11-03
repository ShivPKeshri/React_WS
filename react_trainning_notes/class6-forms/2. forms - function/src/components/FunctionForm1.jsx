import React, { useState } from "react";
const Header = () => {
  const [firstName, setFirstName] = useState();

  const onChangeHander = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <div>
      <h1>Welcome {firstName}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            onChange={onChangeHander}
          />
        </div>

       
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Header;
