import { useState, useEffect } from 'react'
import ProductCard from '../common/ProductCard'
import { Product } from '@/type'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import ProductAddModal from '../Modal/ProductAddModal'
import { useNavigate } from 'react-router-dom'

const Products: React.FC = ({ categories }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const getProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/products/get-all')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 overflow-y-auto max-h-[calc(100vh-_+160px)] products-wrapper ">
        {products.map((product, i) => {
          return (
            <span key={i}>
              <ProductCard product={product} />
            </span>
          )
        })}
        <div
          onClick={showModal}
          className=" bg-green-600 p-4   hover:bg-green-400 flex justify-center items-center text-white border hover:shadow-lg cursor-pointer select-none transiti-all "
        >
          <PlusOutlined />
        </div>
        <div
          onClick={() => navigate('/products')}
          className=" bg-orange-600 p-4 min-h-[180px] hover:bg-orange-400 flex justify-center items-center text-white border hover:shadow-lg cursor-pointer select-none transiti-all "
        >
          <EditOutlined />
        </div>
      </div>
      <ProductAddModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        categories={categories}
        setProducts={setProducts}
        setIsAddModalOpen={setIsModalOpen}
        products={products}
      />
    </>
  )
}
export default Products
