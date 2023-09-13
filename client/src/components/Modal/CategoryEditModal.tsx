import { Modal, Table, Form, Button, Input, message } from 'antd'
import { useState } from 'react'

interface Category {
  _id: string
  name: string
}

const CategoryEditModal = ({
  categoryEditModal,
  setCategoryEditModal,
  handleCancelCategoryEditModal,
  showCategoryEditModal,
  categories,
  setCategories,
}: any) => {
  const [editingRow, setEditingRow] = useState<Category>({})

  const onFinish = (values: any) => {
    try {
      fetch(`http://localhost:5000/categories/${editingRow._id}`, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json' },
      })
      setCategories(
        categories.map((category: Category) => {
          if (category._id === editingRow._id) {
            return { ...category, name: values.name }
          }
          return category
        })
      )
      message.success('Category Updated Successfull')
    } catch (error) {
      message.error('Category Not Updated Try Again!!')
      console.log(error)
    }
  }

  const deleteCategory = (id) => {
    if (window.confirm('Emin misiniz?')) {
      try {
        fetch(`http://localhost:5000/api/categories/${id}`, {
          method: 'DELETE',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        message.success('Category Deleted Successfull')
        setCategories(
          categories.filter((category: Category) => category._id !== id)
        )
      } catch (error) {
        message.error('Category Not Deleted Try Again')
        console.log(error)
      }
    }
  }

  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'name',
      render: (_, record) => {
        {
          if (editingRow._id === record._id) {
            return (
              <Form.Item name="name">
                <Input defaultValue={record.value} />
              </Form.Item>
            )
          } else {
            return <p>{record.value}</p>
          }
        }
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text: any, record: any) => {
        return (
          <div>
            <Button type="link" onClick={() => setEditingRow(record)}>
              Edit
            </Button>
            <Button type="text" htmlType="submit">
              Save
            </Button>
            <Button
              type="link"
              onClick={() => deleteCategory(record._id)}
              className="text-red-600 hover:!text-red-500"
            >
              Delete
            </Button>
          </div>
        )
      },
    },
  ]
  return (
    <>
      <Modal
        title="Categories Edit Modal"
        open={categoryEditModal}
        onOk={setCategoryEditModal}
        onCancel={handleCancelCategoryEditModal}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Table
            bordered
            dataSource={categories}
            columns={columns}
            rowKey={'_id'}
          />
        </Form>
      </Modal>
    </>
  )
}
export default CategoryEditModal
