import { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import CategoryItem from '../category-item/category-item.component'

// Utilities
import Category from '../../types/category.types'

// Styles
import './categories.style.css'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  
  console.log(import.meta.env);
  
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get<Category[]>(`${import.meta.env.VITE_APP_API_URL}/api/category`);
        console.log(data);
  
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchCategories();
    }, []);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map(category => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ) )}
      </div>
    </div>
  )
}

export default Categories