import { useState, useEffect } from "react";
import { CategoryContext } from "./CategoryContext";

export function CategoryProvider({ children }) {
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    (async() => {
      // fetch the categories
      const allCategories = await fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())

      const allCategoryName = await allCategories.map((obj) => obj.name);
      
      // filter the url
      const allCategory = await allCategories.map((obj) => obj.url);
      
      // // fetch each category using the url and promise all
      const promisedProductList = await allCategory.map((url) => 
        fetch(url).then((response) => response.json())
    )
    const productList = await Promise.all(promisedProductList)
    const data = [allCategoryName, productList]
    setFetchedData(data)
      
    })();
  },[]);

  return (
    <CategoryContext.Provider value={[fetchedData]}>
      {children}
    </CategoryContext.Provider>
  );
}
