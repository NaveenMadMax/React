import { useEffect, useState } from "react";
import { fetchcatergory } from "../../service/allcategoryapi/categoryapi";
import { Button } from "@mui/material";
import "./allProductcategory.css";
import { CategoryType } from "../../entity/allProductCategory";

interface CategoryNavProps {
  onCategorySelect: (category: string) => void;
}

const CategoryNav = ({ onCategorySelect }: CategoryNavProps) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [error, setError] = useState<string>("");

  const getCategories = async () => {
    try {
      const data = await fetchcatergory();
      setCategories(data);
    } catch (error) {
      setError("An error occurred while fetching categories" + error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="category-nav">
      {categories.map((category) => (
        <Button
          key={category.slug}
          variant="contained"
          color="primary"
          className="category-btn"
          onClick={() => onCategorySelect(category.slug)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryNav;
