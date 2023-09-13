import { Button, Form, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import ProductEditModal from '../Modal/ProductEditModal'

const ProductEdit = () => {
  const [products, setProducts] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editing, setEditing] = useState()

  const deleteProduct = async (id: any) => {
    try {
      fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      })
      message.success('Product Deleted')
      setProducts(
        products.map((item: any) => {
          if (item._id === id) {
            return item
          }
          return item
        })
      )
    } catch (error) {
      console.log(error)
      message.error('Product Not Deleted Try Again...')
    }
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
    },
    {
      title: 'Image ',
      dataIndex: 'img',
      render: (_, record) => {
        return (
          <div className="flex justify-center items-center text-center">
            <img
              className="w-24 h-24 object-contain "
              src={record.img}
              alt={record.title}
            />
          </div>
        )
      },
    },
    {
      title: 'Price ',
      dataIndex: 'price',
    },
    {
      title: 'Category ',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text: any, record: any) => {
        return (
          <div>
            <Button
              type="link"
              onClick={() => {
                showModal()
                setEditing(record)
              }}
            >
              Edit
            </Button>
            <Button
              type="link"
              className="text-red-600 hover:!text-red-500"
              onClick={() => deleteProduct(record._id)}
            >
              Delete
            </Button>
          </div>
        )
      },
    },
  ]

  const getProducts = async () => {
    const response = await fetch(`http://localhost:5000/products/get-all`, {
      method: 'GET',
    })
    const data = await response.json()
    data && setProducts(data)
  }
  useEffect(() => {
    getProducts()
  }, [products])
  return (
    <>
      <Form>
        <Table
          bordered
          dataSource={products}
          columns={columns}
          rowKey={'_id'}
          scroll={{
            x: 1000,
            y: 600,
          }}
        ></Table>
      </Form>
      <ProductEditModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        editing={editing}
        setIsModalOpen={setIsModalOpen}
        setProducts={setProducts}
        products={products}
      />
    </>
  )
}
export default ProductEdit
