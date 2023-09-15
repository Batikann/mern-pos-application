import { Space, Table } from 'antd'
import { useState, useEffect } from 'react'
const { Column } = Table

interface DataType {
  key: React.Key
  customerName: string
  customerPhoneNumber: string
  createdAt: string
}

const Customers = () => {
  const [billItems, setBillItems] = useState()

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch('http://localhost:5000/bills/get-all')
        const data = await res.json()
        setBillItems(data)
      } catch (error) {
        console.log(error)
      }
    }

    getBills()
  }, [])
  return (
    <>
      <h1 className="text-4xl text-center mb-4 font-bold">Customers</h1>
      <Table
        dataSource={billItems}
        className="px-6"
        bordered
        scroll={{
          x: 1000,
          y: 300,
        }}
      >
        <Column
          title="Customer Name"
          dataIndex="customerName"
          key="customerName"
        />
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
      </Table>
    </>
  )
}
export default Customers
