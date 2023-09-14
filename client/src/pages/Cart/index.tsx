import ModalComponets from '@/components/Modal'
import { useAppDispatch } from '@/redux/store'
import { Button, Card, Popconfirm, Table, message } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { decrease, increase, deleteCartItem } from '@/redux/CartSlice'

const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const cart = useSelector((state) => state.cart)
  const showModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (_, record) => {
        return (
          <img
            src={record.img}
            alt={record.title}
            className="w-24 h-24 object-contain"
          />
        )
      },
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (_, record) => {
        return <p className="text-base font-bold">{record.price}$</p>
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => {
        return (
          <div className="flex gap-2 items-center">
            <Button
              icon={<MinusOutlined />}
              size="small"
              className="!rounded-full"
              onClick={() => dispatch(decrease(record))}
            />

            <span>{record.quantity}</span>
            <Button
              icon={<PlusOutlined />}
              size="small"
              className="!rounded-full"
              onClick={() => dispatch(increase(record))}
            ></Button>
          </div>
        )
      },
    },
    {
      title: 'Sub Total',
      dataIndex: 'subTotal',
      key: 'subTotal',
      render: (_, record) => {
        return <span>{(record.quantity * record.price).toFixed(2)}$</span>
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => {
        return (
          <Popconfirm
            title="Are you sure delete?"
            onConfirm={() => {
              dispatch(deleteCartItem(record))
              message.success('Product successfull deleted cart.')
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        )
      },
    },
  ]

  return (
    <div className="px-6 w-full">
      <Table columns={columns} bordered dataSource={cart.cartItems} />
      <div className="flex justify-end mt-8">
        <Card style={{ width: 300 }}>
          <p className="flex justify-between items-center">
            <span className=" text-xl">Sub Total</span>{' '}
            <span className="text-lg">{cart.total}$</span>
          </p>
          <p className="flex justify-between items-center my-2">
            <span className=" text-xl">KDV</span>{' '}
            <span className=" text-red-600 text-lg">
              {' '}
              +{(cart.total * cart.tax) / 100}$
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="font-bold text-xl">Total</span>
            <span className="font-semibold text-lg">
              {' '}
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              $
            </span>
          </p>
          <Button
            type="primary"
            className="bg-indigo-800 w-full mt-2"
            size="large"
            onClick={showModal}
            htmlType="submit"
            disabled={cart.cartItems.length === 0}
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
