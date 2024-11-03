import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";

const SubCategory = () => {
  const catId = 3;
  const [subCategories, setSubCategories] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.SUBCATEGORY_BY_CAT_ID_URL + catId)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [catId]);

  return (
    <div>
      <h2 className="text-center">Sub Category</h2>
      <ul class="list-group">
        {subCategories.map((item) => (
          <li class="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
