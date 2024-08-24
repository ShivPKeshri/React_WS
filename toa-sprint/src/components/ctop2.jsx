/* eslint-disable jsx-a11y/anchor-is-valid */
import storyImg from "./imgs/story.png";
const Ctop2 = () => {
  return (
    <>
      <a href="#" data-bs-toggle="modal" data-bs-target="#myModal2">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-1" style={{ marginTop: "4px" }}>
                <img src={storyImg} alt="" />
              </div>
              <div className="col-sm-11">
                <h4 className="card-title fw-bold">
                  CTOP-54191 - TOA | Repeated Measures | Response Card Label for
                  HeatMap
                </h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="modal" id="myModal2">
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
                      CTOP-54191 - TOA | Repeated Measures | Response Card Label
                      for HeatMap
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
                Display: Response Card Name For Repeated Measure Project
              </p>
              <ul className="h6">
                <li className="pb-2">
                  Response Card Name was not available in Scenario - Sorting &
                  Annotation Section in Repeated Measure Projects
                </li>
                <li className="pb-2">SME Feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ctop2;
