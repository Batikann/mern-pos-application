import CategoryCard from '../common/CategoryCard'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import '../common/style.css'
import { useEffect, useState } from 'react'
import CategoryModal from '../Modal/CategoryModal'
import CategoryEditModal from '../Modal/CategoryEditModal'

const Categories: React.FC = ({
  categories,
  setNewCategory,
  setCategories,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [categoryEditModal, setCategoryEditModal] = useState<boolean>(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const showCategoryEditModal = () => {
    setCategoryEditModal(true)
  }

  const handleCancelCategoryEditModal = () => {
    setCategoryEditModal(false)
  }

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
        <li
          className="bg-orange-700  hover:bg-orange-500 category-item "
          onClick={showCategoryEditModal}
        >
          <EditOutlined className="text-white font-bold" />
        </li>
      </ul>
      <CategoryModal
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setNewCategory={setNewCategory}
      />
      <CategoryEditModal
        categoryEditModal={categoryEditModal}
        setCategoryEditModal={setCategoryEditModal}
        handleCancelCategoryEditModal={handleCancelCategoryEditModal}
        showCategoryEditModal={showCategoryEditModal}
        categories={categories}
        setCategories={setCategories}
      />
    </>
  )
}
export default Categories
