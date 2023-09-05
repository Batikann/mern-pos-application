import ModalComponets from '@/components/Modal'
import { Button, Card, Table } from 'antd'
import { useState } from 'react'

const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return (
    <div className="px-6 w-full">
      <Table dataSource={dataSource} columns={columns} bordered />
      <div className="flex justify-end mt-8">
        <Card style={{ width: 300 }}>
          <p className="flex justify-between items-center">
            <span className=" text-xl">Sub Total</span>{' '}
            <span className="text-lg">999$</span>
          </p>
          <p className="flex justify-between items-center my-2">
            <span className=" text-xl">KDV</span>{' '}
            <span className=" text-red-600 text-lg"> +39$</span>
          </p>
          <p className="flex justify-between items-center">
            <span className="font-bold text-xl">Total</span>
            <span className="font-semibold text-lg">1200$</span>
          </p>
          <Button
            type="primary"
            className="bg-indigo-800 w-full mt-2"
            size="large"
            onClick={showModal}
            htmlType="submit"
          >
            Primary Button
          </Button>
        </Card>
      </div>
      <ModalComponets
        isModalOpen={isModalOpen}
        showModal={showModal}
        title={'Bill'}
      />
    </div>
  )
}

export default Cart
