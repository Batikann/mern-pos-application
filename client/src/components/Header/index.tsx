import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  SnippetsOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Input, Badge } from 'antd'

const Header = () => {
  return (
    <div className="border-b mb-6 ">
      <header className="py-4 px-6 flex items-center justify-between gap-10 max-w-7xl mx-auto ">
        <div className="logo">
          <a href="#">
            <h2 className="md:text-4xl text-2xl font-bold">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input
            size="large"
            placeholder="large size"
            prefix={<SearchOutlined />}
            className="rounded-full w-full"
          />
        </div>
        <div className="md:static fixed bottom-0 left-0 md:w-auto w-screen md:bg-transparent bg-white  md:p-0 md:border-t-0 border-t p-4 ">
          <ul className="flex items-center justify-between gap-7 text-center ">
            <li className="cursor-pointer">
              <a href="" className="hover:text-[#757779] transition-all">
                <HomeOutlined className="md:text-2xl text-xl  " />
                <p className="md:text-xs text-[10px]">Home</p>
              </a>
            </li>
            <li className="cursor-pointer md:flex hidden">
              <a
                href=""
                className="hover:text-[#40a9ff] transition-all relative "
              >
                <Badge count={5} size="small" className="mt-2">
                  <ShoppingCartOutlined className="md:text-2xl text-xl" />
                  <p className="md:text-xs text-[10px]">Cart</p>
                </Badge>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="" className="hover:text-[#40a9ff] transition-all">
                <SnippetsOutlined className="md:text-2xl text-xl" />
                <p className="md:text-xs text-[10px]">Order</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="" className="hover:text-[#40a9ff] transition-all">
                <UserOutlined className="md:text-2xl text-xl" />
                <p className="md:text-xs text-[10px]">Customers</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="" className="hover:text-[#40a9ff] transition-all">
                <BarChartOutlined className="md:text-2xl text-xl" />
                <p className="md:text-xs text-[10px]">Istatistics</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="" className="hover:text-[#40a9ff] transition-all">
                <LogoutOutlined className="md:text-2xl text-xl" />
                <p className="md:text-xs text-[10px]">LogOut</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden flex items-center justify-center ">
          <a href="" className="hover:text-[#40a9ff] transition-all relative ">
            <Badge count={5} size="small">
              <ShoppingCartOutlined className=" text-2xl" />
            </Badge>
          </a>
        </div>
      </header>
    </div>
  )
}
export default Header
