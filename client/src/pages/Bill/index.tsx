import BillModal from '@/components/Modal/BillModal'
import { Space, Table } from 'antd'
import { useState } from 'react'
const { Column } = Table

interface DataType {
  key: React.Key
  name: string
  phoneNumber: string
  createdDate: number
  paymentMethod: string
  totalPrice: string
}

const date = new Date()

const data: DataType[] = [
  {
    key: '1',
    name: 'Jhon Brown',
    phoneNumber: '55555555',
    createdDate: date.getDay(),
    paymentMethod: 'Credit Card',
    totalPrice: '555$',
  },
  {
    key: '1',
    name: 'Jhon Brown',
    phoneNumber: '55555555',
    createdDate: date.getDay(),
    paymentMethod: 'Credit Card',
    totalPrice: '555$',
  },
  {
    key: '1',
    name: 'Jhon Brown',
    phoneNumber: '55555555',
    createdDate: date.getDay(),
    paymentMethod: 'Credit Card',
    totalPrice: '555$',
  },
]

const Bill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <>
      <Table dataSource={data} className="px-6" bordered>
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Phone Number"
          dataIndex="phoneNumber"
          key="phoneNumber"
        />
        <Column
          title="Created Date"
          dataIndex="createdDate"
          key="createdDate"
        />
        <Column
          title="Payment Method"
          dataIndex="paymentMethod"
          key="paymentMethod"
        />
        <Column title="Total Price" dataIndex="totalPrice" key="totalPrice" />
        <Column
          title="Action"
          key="action"
          className="text-indigo-700"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a onClick={showModal} href="#">
                Print
              </a>
            </Space>
          )}
        />
      </Table>
      <BillModal
        title={'Bill'}
        showModal={showModal}
        isModalOpen={isModalOpen}
      />
    </>
  )
}
export default Bill
