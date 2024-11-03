import CategoryList from "../../Components/CategoryList";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Header />
        <CategoryList />
      </div>
    </>
  );
};
export default HomePage;
