/* eslint-disable jsx-a11y/anchor-is-valid */
import storyImg from "./imgs/story.png";
const Ctop5 = () => {
  return (
    <>
      <a href="#" data-bs-toggle="modal" data-bs-target="#myModal5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-1" style={{ marginTop: "4px" }}>
                <img src={storyImg} alt="" />
              </div>
              <div className="col-sm-11">
                <h4 className="card-title fw-bold">
                  CTOP-51611 & CTOP-55097 - TOA | Model Details |UX Updates
                </h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="modal" id="myModal5">
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
                      CTOP-51611 & CTOP-55097 - TOA | Model Details |UX Updates
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
                Improved Model Card layout issues as suggested by UX Team for
                better user experience
              </p>
              <ul className="h6">
                <li className="pb-2">Updated Favorite Icon Colors and Font</li>
                <li className="pb-2">Improved Header & Sub Header Section</li>
                <li className="pb-2">Improved Priors Section List</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ctop5;
