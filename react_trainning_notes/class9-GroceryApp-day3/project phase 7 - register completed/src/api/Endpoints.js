import Constants from "./Constants";

const Endpoints = {
    CATEGORY_URL: `${Constants.BASE_URL}category`,
    SUBCATEGORY_BY_CAT_ID_URL: `${Constants.BASE_URL}subcategory/`,
    PRODUCTS_BY_CAT_ID_URL: `${Constants.BASE_URL}products/cat/`,
    PRODUCTS_BY_ID_URL: `${Constants.BASE_URL}products/`,
    REGISTER_URL: `${Constants.BASE_URL}auth/register`,
    LOGIN_URL: `${Constants.BASE_URL}auth/login`,
}
export default Endpoints;