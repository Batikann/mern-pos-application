import { clearCart, decrease, increase } from '@/redux/CartSlice'
import { useAppDispatch } from '@/redux/store'
import { PlusOutlined, MinusOutlined, ClearOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart: React.FC = () => {
  const cart = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <div className="cart  h-full fh-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-indigo-800 text-white font-bold py-4 px-10 w-full text-center mb-4">
        Carts
      </h2>
      <div className="overflow-y-auto carts-items">
        {cart.cartItems.map((cartItem) => {
          return (
            <div
              className="flex items-center justify-between p-2 "
              key={cartItem._id}
            >
              <div className="flex items-center">
                <img src={cartItem.img} alt="telephone" className="w-14 h-14" />
                <div>
                  <p className="font-bold text-base">{cartItem.title}</p>
                  <p>{cartItem.price}$</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <Button
                  icon={<MinusOutlined />}
                  size="small"
                  className="!rounded-full"
                  onClick={() => dispatch(decrease(cartItem))}
                />

                <span>{cartItem.quantity}</span>
                <Button
                  icon={<PlusOutlined />}
                  size="small"
                  className="!rounded-full"
                  onClick={() => dispatch(increase(cartItem))}
                ></Button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-auto border-t pt-4">
        <div className="flex justify-between px-2 mb-3 items-center">
          <p className="font-bold">Total Price</p>
          <p>{cart.total}$</p>
        </div>
        <div className="flex justify-between border-t p-2 items-center ">
          <p className="font-bold ">KDV %{cart.tax}</p>
          <p className="text-red-700">+{(cart.total * cart.tax) / 100}$</p>
        </div>
        <div className="flex justify-between px-2 border-y p-3 items-center">
          <p className="font-bold text-xl text-indigo-700 ">Genel Toplam</p>
          <p className="text-xl font-bold">
            {cart.total + (cart.total * cart.tax) / 100 > 0
              ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
              : 0}
            $
          </p>
        </div>
        <div className="flex flex-col px-2 p-3 items-center gap-2 w-full">
          <Button
            className="bg-green-600 hover:bg-green-400 text-white   w-full  rounded-md border-none"
            onClick={() => navigate('/cart')}
            disabled={cart.cartItems.length === 0}
          >
            Siparişi Oluştur
          </Button>
          <Button
            className=" text-white  w-full  rounded-md border-none"
            type="primary"
            danger
            icon={<ClearOutlined />}
            onClick={() => {
              if (window.confirm('Are You Sure')) {
                dispatch(clearCart())
              }
            }}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Cart
