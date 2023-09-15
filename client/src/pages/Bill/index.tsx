import BillModal from '@/components/Modal/BillModal'
import { Space, Table } from 'antd'
import { useEffect, useState } from 'react'
const { Column } = Table

interface DataType {
  key: React.Key
  name: string
  phoneNumber: string
  createdAt: string
  paymentMethod: string
  totalAmount: string
}

const Bill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bills, setBills] = useState()
  const [customer, setCustomer] = useState()
  const showModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const getBills = async () => {
    try {
      const res = await fetch('http://localhost:5000/bills/get-all', {
        method: 'GET',
      })
      const data = await res.json()
      setBills(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBills()
  }, [])
  return (
    <>
      <Table dataSource={bills} className="px-6" bordered>
        <Column title="Name" dataIndex="customerName" key="customerName" />
        <Column
          title="Phone Number"
          dataIndex="customerPhoneNumber"
          key="customerPhoneNumber"
        />
        <Column
          title="Created Date"
          dataIndex="createdAt"
          key="createdAt"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <p>{record.createdAt.substring(0, 10)}</p>
            </Space>
          )}
        />
        <Column
          title="Payment Method"
          dataIndex="paymentMethod"
          key="paymentMethod"
        />
        <Column
          title="Total Price"
          dataIndex="totalAmount"
          key="totalAmount"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <p>{record.totalAmount}$</p>
            </Space>
          )}
        />
        <Column
          title="Action"
          key="action"
          className="text-indigo-700"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a
                onClick={() => {
                  showModal()
                  setCustomer(record)
                }}
                href="#"
              >
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
        customer={customer}
      />
    </>
  )
}
export default Bill
