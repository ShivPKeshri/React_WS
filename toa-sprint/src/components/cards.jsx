import Ctop1 from "./ctop1";
import Ctop2 from "./ctop2";
import Ctop3 from "./ctop3";
import Ctop4 from "./ctop4";
import Ctop5 from "./ctop5";
import Ctop6 from "./ctop6";

const AllCards = () => {
  return (
    <div className="container pt-5">
      <div class="row">
        <div class="col-sm-4 mb-4">
          <Ctop1 />
        </div>
        <div class="col-sm-4 mb-4">
          <Ctop2 />
        </div>
        <div class="col-sm-4 mb-4">
          <Ctop3 />
        </div>
        <div class="col-sm-4 mb-4">
          <Ctop4 />
        </div>
        <div class="col-sm-4 mb-4">
          <Ctop5 />
        </div>
        <div class="col-sm-4 mb-4">
          <Ctop6 />
        </div>
      </div>
    </div>
  );
};

export default AllCards;
