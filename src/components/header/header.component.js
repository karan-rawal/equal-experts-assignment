import React, { useCallback } from 'react';
import './header.styles.css';

const HeaderComponent = ({
  currentCategory,
  setCurrentCategory,
  categories,
}) => {
  const onCategoryClick = useCallback((category) => {
    setCurrentCategory({
        ...category,
    });
  }, []);

  const categoryMapper = (category) => {
    const isActive = category.id === currentCategory.id;
    return <a key={category.id} href={null} onClick={() => onCategoryClick(category)}>{isActive.toString()} {category.label}</a>;
  };

  return (
    <div className="header-container">
      <div className="section logo">
        My Cart
      </div>
      <div className="section categories">
        {
            categories.map(categoryMapper)
        }
      </div>
    </div>
  );
};

export default HeaderComponent;
