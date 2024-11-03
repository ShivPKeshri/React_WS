import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
