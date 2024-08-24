/* eslint-disable jsx-a11y/anchor-is-valid */
import storyImg from "./imgs/story.png";
const Ctop4 = () => {
  return (
    <>
      <a href="#" data-bs-toggle="modal" data-bs-target="#myModal4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-1" style={{ marginTop: "4px" }}>
                <img src={storyImg} alt="" />
              </div>
              <div className="col-sm-11">
                <h4 className="card-title fw-bold">
                  CTOP-54583 - TOA | Update the Labels for all Endpoints for
                  Design Card, Response Card, and Enrollment Card
                </h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="modal" id="myModal4">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <div className="row">
                  <div className="col-sm-1" style={{ marginTop: "4px" }}>
                    <img src={storyImg} alt="" />
                  </div>
                  <div className="col-sm-11">
                    <h4 className="card-title fw-bold">
                      CTOP-54583 - TOA | Update the Labels for all Endpoints for
                      Design Card, Response Card, and Enrollment Card
                    </h4>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body" style={{ marginLeft: "3rem" }}>
              <p className="h6 pb-2">
                For all Endpoints, updated below labels for all features like
                Heatmap, Filter, Table view, and Hover Tooltip (as applicable)
              </p>
              <ul className="h6">
                <li className="pb-2">Design Name to Design Card Name</li>
                <li className="pb-2">
                  Response Scenario Name to Response Card Name (excluding
                  Repeated Measures)
                </li>
                <li className="pb-2">
                  Enrollment Scenario Name to Enrollment Card Name
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ctop4;
