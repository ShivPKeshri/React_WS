import AllCards from "./cards";

const MainPage = () => {
  return (
    <div>
      <div class="container bg-body-secondary">
        <div class="card col-12 mt-5 bg-info text-light">
          <h1 className="text-center mt-4">TOA Sprint Demo</h1>
          <h5 className="text-center">Solara Sprint 23.2.4</h5>
        </div>
      </div>
      <AllCards />
    </div>
  );
};
export default MainPage;
