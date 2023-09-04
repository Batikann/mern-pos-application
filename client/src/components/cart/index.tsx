import { PlusOutlined, MinusOutlined, ClearOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Cart: React.FC = () => {
  return (
    <div className="cart  h-full fh-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-indigo-800 text-white font-bold py-4 px-10 w-full text-center mb-4">
        Carts
      </h2>
      <div className="overflow-y-auto carts-items">
        <div className="flex items-center justify-between p-2 ">
          <div className="flex items-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
              alt="telephone"
              className="w-14 h-14"
            />
            <div>
              <p className="font-bold text-base">İphone 14 Pro Max</p>
              <p>2000$</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              icon={<PlusOutlined />}
              size="small"
              className="!rounded-full"
            />

            <span>2</span>
            <Button
              icon={<MinusOutlined />}
              size="small"
              className="!rounded-full"
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 ">
          <div className="flex items-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
              alt="telephone"
              className="w-14 h-14"
            />
            <div>
              <p className="font-bold text-base">İphone 14 Pro Max</p>
              <p>2000$</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              icon={<PlusOutlined />}
              size="small"
              className="!rounded-full"
            />

            <span>2</span>
            <Button
              icon={<MinusOutlined />}
              size="small"
              className="!rounded-full"
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 ">
          <div className="flex items-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
              alt="telephone"
              className="w-14 h-14"
            />
            <div>
              <p className="font-bold text-base">İphone 14 Pro Max</p>
              <p>2000$</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              icon={<PlusOutlined />}
              size="small"
              className="!rounded-full"
            />

            <span>2</span>
            <Button
              icon={<MinusOutlined />}
              size="small"
              className="!rounded-full"
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 ">
          <div className="flex items-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
              alt="telephone"
              className="w-14 h-14"
            />
            <div>
              <p className="font-bold text-base">İphone 14 Pro Max</p>
              <p>2000$</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              icon={<PlusOutlined />}
              size="small"
              className="!rounded-full"
            />

            <span>2</span>
            <Button
              icon={<MinusOutlined />}
              size="small"
              className="!rounded-full"
            ></Button>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 ">
          <div className="flex items-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
              alt="telephone"
              className="w-14 h-14"
            />
            <div>
              <p className="font-bold text-base">İphone 14 Pro Max</p>
              <p>2000$</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              icon={<PlusOutlined />}
              size="small"
              className="!rounded-full"
            />

            <span>2</span>
            <Button
              icon={<MinusOutlined />}
              size="small"
              className="!rounded-full"
            ></Button>
          </div>
        </div>
      </div>
      <div className="mt-auto border-t pt-4">
        <div className="flex justify-between px-2 mb-3 items-center">
          <p className="font-bold">Total Price</p>
          <p>2000$</p>
        </div>
        <div className="flex justify-between border-t p-2 items-center ">
          <p className="font-bold ">KDV %20</p>
          <p className="text-red-700">+400$</p>
        </div>
        <div className="flex justify-between px-2 border-y p-3 items-center">
          <p className="font-bold text-xl text-indigo-700 ">Genel Toplam</p>
          <p className="text-xl font-bold">2400$</p>
        </div>
        <div className="flex flex-col px-2 p-3 items-center gap-2 w-full">
          <Button className="bg-green-600 hover:bg-green-400 text-white   w-full  rounded-md border-none">
            Siparişi Oluştur
          </Button>
          <Button
            className=" text-white  w-full  rounded-md border-none"
            type="primary"
            danger
            icon={<ClearOutlined />}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Cart
