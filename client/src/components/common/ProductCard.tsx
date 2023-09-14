import { addProduct } from '@/redux/CartSlice'
import { useAppDispatch } from '@/redux/store'

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity: 1 }))
  }
  return (
    <div
      className=" bg-white border hover:shadow-lg cursor-pointer select-none transiti-all "
      onClick={handleClick}
    >
      <div>
        <img
          src={product.img}
          alt={product.title}
          className="h-56 object-contain w-full border border-b"
        />
      </div>
      <div className="px-4 py-2">
        <p className="font-bold text-xl">{product.title}</p>
        <p className="text-lg">{product.price}$</p>
      </div>
    </div>
  )
}
export default ProductCard
