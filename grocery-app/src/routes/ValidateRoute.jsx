import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ValidateRoute = (props) => {
  const { RenderComponent } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <>
      <RenderComponent />
    </>
  );
};
export default ValidateRoute;
