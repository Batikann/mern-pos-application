import { Button, Form, Input, Modal, Select, message } from 'antd'

const ProductAddModal = ({
  isModalOpen,
  handleCancel,
  categories,
  setProducts,
  setIsAddModalOpen,
  products,
}: any) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    try {
      fetch('http://localhost:5000/product', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
      message.success('Kategori başarıyla eklendi.')
      form.resetFields()
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ])
      setIsAddModalOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      title="Add Product"
      open={isModalOpen}
      onOk={handleCancel}
      onCancel={handleCancel}
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Product Name"
          rules={[{ required: true, message: 'Product Name Not Empty Pass!' }]}
        >
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item
          name="img"
          label="Image"
          rules={[{ required: true, message: 'Product Image Not Empty Pass!' }]}
        >
          <Input placeholder="Product Image" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Product Price Not Empty Pass!' }]}
        >
          <Input placeholder="Price" />
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
        <Form.Item className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-indigo-800 text-white hover:bg-indigo-600"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default ProductAddModal
