import React, {useState} from 'react';
import './filter.css';

  const CategoryButton = ({category, isActive, onClick }) => {
    return (
      <button
        className={`filter__button ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {category}
      </button>
    );
  };

  const Dropdown = ({ data }) => {
    return (
      <div className="dropdown">
        {data.map((item) => (
          <div key={item} className="dropdown-item">
            {item}
          </div>
        ))}
      </div>
      
    );
  };

const Appapp = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "Исполнители", data: ["Исполнитель 1", "Исполнитель 2", "Исполнитель 3", "Исполнитель 4", "Исполнитель 5"] },
    { name: "Год выпуска", data: ["2020", "2019", "2018"] },
    { name: "Жанры", data: ["Жанр 1", "Жанр 2", "Жанр 3"] }
  ];

  const handleCategoryClick = (categoryName) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryName);
    }
  };
  
  return (
      <div className="centerblock__filter ">
          <h2 className="h2">Треки</h2> 
          <div className='filter'>
      
        <div className="filter__title">Искать по:</div>
          <div className='filter__category category'>
                {categories.map((category) => (
              <div key={category.name} className="category">
                <CategoryButton
                  category={category.name}
                  isActive={activeCategory === category.name}
                  onClick={() => handleCategoryClick(category.name)}
                />
                {activeCategory === category.name && (
                  <Dropdown data={category.data} />
                )}
              </div>
            ))}
          </div>
        </div>   
      </div>
  );
};

export default Appapp;