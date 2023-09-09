import { Button, Form, Input, Modal, message } from 'antd'

const CategoryModal: React.FC = ({
  handleCancel,
  isModalOpen,
  setIsModalOpen,
  setNewCategory,
}: any) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    try {
      fetch('http://localhost:5000/category', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json' },
      })
      message.success('Added Category')
      setIsModalOpen(false)
      setNewCategory(values)
      form.resetFields()
    } catch (error: any) {
      message.error(error.message)
    }
  }

  return (
    <>
      <Modal
        title="Add Category"
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="name"
            label="Category Name"
            rules={[{ required: true, message: 'category name not empty!!' }]}
          >
            <Input placeholder="Enter category name" />
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Button
              type="primary"
              className="bg-indigo-800 min-w-[100px] py-4 flex justify-center items-center mb-0"
              htmlType="submit"
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default CategoryModal
