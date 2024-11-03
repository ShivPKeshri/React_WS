import { useEffect, useState } from "react";
import Endpoints from "../../api/Endpoints";
import axios from "axios";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.CATEGORY_URL)
      .then((response) => setCategories(response.data.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">All Categories</h2>
      <div className="row">
        {categories.map((c) => (
          <Category key={c.catId} data={c} />
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
