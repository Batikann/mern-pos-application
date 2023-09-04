import Categories from '@/components/categories'
import Products from '@/components/products'

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex justify-between gap-10">
      <div className="categories overflow-auto max-h-[calc(100vh-_-60px)] pb-64 flex-[2]">
        <Categories />
      </div>
      <div className="products flex-[8]">
        <Products />
      </div>
      <div className="cart">Cart</div>
    </div>
  )
}
