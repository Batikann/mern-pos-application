import Cart from '@/components/cart'
import Categories from '@/components/categories'
import Products from '@/components/products'

export const Home = () => {
  return (
    <div className="max-w-full mx-auto px-6 max-[321px]:px-2 flex justify-between lg:gap-10 gap-6 flex-col md:flex-row md:pb-0 pb-24">
      <div className="categories overflow-auto max-h-[calc(100vh-_-60px)] md:pb-64 ">
        <Categories />
      </div>
      <div className="products flex-[8]">
        <Products />
      </div>
      <div className="cart min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
        <Cart />
      </div>
    </div>
  )
}
