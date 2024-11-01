import { useState } from "react";
import Nav from "./components/navbar/Nav";
import Search from "./components/search/Search";
import FoodList from "./components/food/FoodList";
import "./App.css";
import Container from "./components/container/Container";
import InnerContainer from "./components/container/InnerContainer";
import FoodDetails from "./components/foodDetails/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [selectedFood, setSelectedFood] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setSelectedFood={setSelectedFood} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails food={selectedFood} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
