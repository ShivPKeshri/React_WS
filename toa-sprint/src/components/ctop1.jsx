/* eslint-disable jsx-a11y/anchor-is-valid */
import storyImg from "./imgs/story.png";
const Ctop1 = () => {
  return (
    <>
      <a href="#" data-bs-toggle="modal" data-bs-target="#myModal">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-1" style={{ marginTop: "4px" }}>
                <img src={storyImg} alt="" />
              </div>
              <div className="col-sm-11">
                <h4 className="card-title fw-bold">
                  CTOP-53723 - TOA | Futility | Model Card Updates- Summary
                  Section
                </h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="modal" id="myModal">
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
                      CTOP-53723 - TOA | Futility | Model Card Updates- Summary
                      Section
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
                Display: Futility Boundary Family in Design tab of Summary
                section for GS & SSR Design
              </p>
              <ul className="h6">
                <li className="pb-2">
                  For Binary & Continuous Single EP - for Futility Boundary
                  Family as “Difference from Control”: Futility Boundary
                  (Difference from Control) with FutilityThreshold value
                </li>
                <li className="pb-2">
                  For TTE Single EP(stratified and non-stratified) - for
                  Futility Boundary Family as “HR”: Futility Boundary (HR) with
                  FutilityThreshold
                </li>
                <li className="pb-2">
                  For TTE- TTE Dual EP - for Futility Boundary Family as “HR” :
                  &#123;FutilityBoundaryFamily_EP#&#125;(&#123;FutilityThreshold_EP#&#125;)
                  <br />
                  for Futility Boundary Family as “Spending Functions” :
                  &#123;FutilityBoundaryFamily_EP#&#125;(&#123;FutilitySpendingFunction_EP#&#125;)((&#123;FutilityParameters_EP2&#125;)
                  ((&#123;FutilityBoundaryType_EP2&#125;)
                </li>
                <li className="pb-2">
                  For All Single EP - for Futility Boundary Family as “Spending
                  Function” : display as per previous implementation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ctop1;
