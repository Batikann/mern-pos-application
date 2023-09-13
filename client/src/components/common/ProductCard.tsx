import { Product } from '@/type'

const ProductCard = ({ product }) => {
  return (
    <div className=" bg-white border hover:shadow-lg cursor-pointer select-none transiti-all ">
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
