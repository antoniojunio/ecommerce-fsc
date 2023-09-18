import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import CategoryItem from '../category-item/category-item.component'
import Loading from '../loading/loading.component'

// Utilities
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// Styles
import { fetchCategories } from '../../store/toolkit/category/category.slice'
import { useAppSelector } from '../../hooks/redux.hooks'

const Categories = () => {
  const { isLoading, categories } = useAppSelector(state => state.categoryReducer)

  const dispach = useDispatch()

  useEffect(() => {
    dispach(fetchCategories() as any)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
