import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Test from "./components/Test";

function App() {
  const fruits = [
    { name: "apple", id: 1, price: 20 },
    { name: "banana", id: 2, price: 30 },
    { name: "mango", id: 3, price: 40 },
  ];
  return (
    <div className="App">
      {/* <Test com_name="comp 1" /> */}
      {/* <Fruits fruits={fruits} /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
