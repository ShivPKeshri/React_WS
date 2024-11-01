const apiUrl = import.meta.env.VITE_API_ENDPOINT;
const apiKey = import.meta.env.VITE_API_KEY;

const apiConfig = {
  apiUrl: apiUrl,
  apiKey: apiKey,
  apiRecipesUrl: `${apiUrl}/recipes`,
  apiComplexSearchUrl: `${apiUrl}/recipes/complexSearch`,
};

export default apiConfig;
