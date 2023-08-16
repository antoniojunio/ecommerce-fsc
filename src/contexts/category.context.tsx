import { collection, getDocs } from 'firebase/firestore'
import { FunctionComponent, createContext, useState } from 'react'

// Utilities
import { db } from '../config/firebase.config'
import Category from '../types/category.types'
import { categoryConverter } from '../components/converters/firestore.converters'

interface ICategoryContext {
  categories: Category[]
  isLoading: boolean
  fetchCategories: () => Promise<void>
}

interface CustomCategoryContext {
  children: React.ReactNode
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve()
})

const CategoryContextProvider: FunctionComponent<CustomCategoryContext> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)

      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
