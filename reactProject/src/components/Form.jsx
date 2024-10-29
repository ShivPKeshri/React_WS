import { useState } from "react";
const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        {name.firstName} {name.lastName}
        <br />
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />
        <button onClick={(e) => (e.preventDefault(), console.log(name))}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
