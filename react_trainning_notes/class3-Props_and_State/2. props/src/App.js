import Customer from "./components/Customer";
import Employee from "./components/Employee";
import Person from "./components/Person";
import ProductList from "./components/ProductList";
import User from "./components/User";

function App() {
  return (
    <div className="container">
      {/* <Person name="Mark" />
      <Person name="John" />
      <Person name="Watson" /> */}

      {/* <Employee id="101" name="Mark" email="m@gmail.com" />
      <Employee id="102" name="Paul" email="p@gmail.com" />
      <Employee id="103" name="John" email="j@gmail.com" /> */}

      {/* <Customer data={{ id: 1, name: "mark", email: "m@gmail.com" }} />
      <Customer data={{ id: 2, name: "paul", email: "p@gmail.com" }} />
      <Customer data={{ id: 3, name: "watson", email: "w@gmail.com" }} /> */}

      {/* <ProductList /> */}
      <User name="John"  />
    </div>
  );
}

export default App;
