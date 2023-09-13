import { Button, Form, Input, Modal, Select, message } from 'antd'
import { useState, useEffect } from 'react'

const ProductEditModal = ({
  isModalOpen,
  handleCancel,
  editing,
  setIsModalOpen,
  products,
  setProducts,
}: any) => {
  const [categories, setCategories] = useState([])
  const [form] = Form.useForm()
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

  const onFinish = (values) => {
    console.log(values)

    try {
      fetch(`http://localhost:5000/products/${editing._id}`, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
      message.success('Product Updated Successfully')
      setProducts(
        products.map((item: any) => {
          if (item._id === editing._id) {
            return values
          }
          return item
        })
      )
      setIsModalOpen(false)
      form.resetFields()
    } catch (error) {
      console.log(error)
      message.error('Product Not Updated Try Again')
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Modal
      destroyOnClose
      title="Yeni Ürün Ekle"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={editing}
        preserve={false}
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Ürün Adı"
          rules={[{ required: true, message: 'Ürün Adı Alanı Boş Geçilemez!' }]}
        >
          <Input placeholder="Ürün adı giriniz." />
        </Form.Item>
        <Form.Item
          name="img"
          label="Ürün Görseli"
          rules={[
            { required: true, message: 'Ürün Görseli Alanı Boş Geçilemez!' },
          ]}
        >
          <Input placeholder="Ürün görseli giriniz." />
        </Form.Item>
        <Form.Item
          name="price"
          label="Ürün Fiyatı"
          rules={[
            { required: true, message: 'Ürün Fiyatı Alanı Boş Geçilemez!' },
          ]}
        >
          <Input placeholder="Ürün fiyatı giriniz." />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Category Not pass empty' }]}
        >
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.name ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.name ?? '')
                .toLowerCase()
                .localeCompare((optionB?.name ?? '').toLowerCase())
            }
            options={categories}
          />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-indigo-800 text-white"
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default ProductEditModal
