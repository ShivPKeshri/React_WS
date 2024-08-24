/* eslint-disable jsx-a11y/anchor-is-valid */
import storyImg from "./imgs/bug.png";
const Ctop6 = () => {
  return (
    <>
      <a href="#" data-bs-toggle="modal" data-bs-target="#myModal6">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-1" style={{ marginTop: "4px" }}>
                <img src={storyImg} alt="" />
              </div>
              <div className="col-sm-11">
                <h4 className="card-title fw-bold">
                  CTOP-41543 - Design Finder | Model Card | Model card takes
                  little longer to load
                </h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="modal" id="myModal6">
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
                      CTOP-41543 - Design Finder | Model Card | Model card takes
                      little longer to load
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
                Improved loading of Model Card in Design Finder
              </p>
              <ul className="h6">
                <li className="pb-2">
                  Implemented spinner while opening model card
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ctop6;
