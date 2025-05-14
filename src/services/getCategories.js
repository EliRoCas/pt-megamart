import productsData from "../data/productsDTO";

const getCategories = () => {
  const categories = productsData.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
};

export default getCategories;
