import { useEffect, useState } from 'react'
import axios from 'axios'

// Utilities
import Category from '../../types/category.types'

// Styles
import './categories.style.css'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fethCategories = async () => {
    try {
      const { data } = await axios.get<Category[]>(`${import.meta.env.VITE_APP_API_URL}/api/category`);
      console.log(data);

      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  
  }

  console.log({categories});


  useEffect(() => {
    fethCategories()
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map(category => )} */}
      </div>
    </div>
  )
}

export default Categories