import { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import { Link, useParams } from "react-router-dom";

const SubCategory = () => {
  const { catId, catName } = useParams();

  const [subCat, setSubCat] = useState([]);
  useEffect(() => {
    fetchData();
  }, [catId]);

  const fetchData = () => {
    axios
      .get(Endpoints.SUBCATEGORY_BY_CAT_ID_URL + catId)
      .then((response) => setSubCat(response.data.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2 className="text-center">{catName}</h2>
      <ul className="list-group">
        {subCat.map((cat) => (
          <li className="list-group-item">{cat.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
