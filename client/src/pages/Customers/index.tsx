import { Space, Table } from 'antd'

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

const Customers = () => {
  return (
    <>
      <h1 className="text-4xl text-center mb-4 font-bold">Customers</h1>
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
              <a href="#">Print</a>
            </Space>
          )}
        />
      </Table>
    </>
  )
}
export default Customers
