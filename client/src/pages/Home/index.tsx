import Cart from '@/components/cart'
import Categories from '@/components/categories'
import Products from '@/components/products'
import { useEffect, useState } from 'react'

interface Category {
  _id: string
  name: string
}

export const Home = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategory, setNewCategory] = useState('')
  const getCategories = async () => {
    const response = await fetch(`http://localhost:5000/categories/get-all`, {
      method: 'GET',
    })
    const data = await response.json()
    data &&
      setCategories(
        data.map((data) => {
          return { ...data, value: data.name }
        })
      )
  }

  useEffect(() => {
    getCategories()
  }, [newCategory])
  return (
    <div className="max-w-full mx-auto px-6 max-[321px]:px-2 flex justify-between lg:gap-10 gap-6 flex-col md:flex-row md:pb-0 pb-24 h-screen">
      <div className="categories overflow-auto max-h-[calc(100vh-_-60px)] md:pb-64 ">
        <Categories
          categories={categories}
          setNewCategory={setNewCategory}
          setCategories={setCategories}
        />
      </div>
      <div className="products flex-[8]">
        <Products categories={categories} />
      </div>
      <div className="cart min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
        <Cart />
      </div>
    </div>
  )
}
