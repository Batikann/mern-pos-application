import CategoryCard from '../common/CategoryCard'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import '../common/style.css'
import { useEffect, useState } from 'react'
import CategoryModal from '../Modal/CategoryModal'

interface Category {
  _id: string
  name: string
}

const Categories: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategory, setNewCategory] = useState('')
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const getCategories = async () => {
    const response = await fetch(`http://localhost:5000/categories/get-all`, {
      method: 'GET',
    })
    const data = await response.json()
    setCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [newCategory])

  return (
    <>
      <ul className="flex  gap-4 md:flex-col">
        <li>
          <CategoryCard
            title={'Tümü'}
            bgColor="bg-indigo-800"
            hoverBgColor="hover:bg-indigo-600"
          />
        </li>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <CategoryCard
                title={category.name}
                bgColor="bg-indigo-800"
                hoverBgColor="hover:bg-indigo-600"
              />
            </li>
          )
        })}
        <li
          className="bg-emerald-600   hover:bg-emerald-400 category-item"
          onClick={showModal}
        >
          <PlusOutlined className="text-white font-bold " />
        </li>
        <li className="bg-orange-700  hover:bg-orange-500 category-item ">
          <EditOutlined className="text-white font-bold" />
        </li>
      </ul>
      <CategoryModal
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setNewCategory={setNewCategory}
      />
    </>
  )
}
export default Categories
