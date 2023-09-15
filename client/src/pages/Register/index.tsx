import CarouselContent from '@/components/Carousel'
import { carouselCardData } from '@/data/CarouselData'
import { Form, Input, Button, Carousel, message } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const onFinish = (values) => {
    setLoading(true)
    try {
      fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
      message.success('Register Successfully')
      navigate('/login')
      setLoading(false)
    } catch (error) {
      console.log(error)
      message.error('Register Not Successfull Try Again')
    }
  }

  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Kullanıcı Adı"
              name={'username'}
              rules={[
                {
                  required: true,
                  message: 'Kullanıcı Adı Alanı Boş Bırakılamaz!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name={'email'}
              rules={[
                {
                  required: true,
                  message: 'E-mail Alanı Boş Bırakılamaz!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name={'password'}
              rules={[
                {
                  required: true,
                  message: 'Şifre Alanı Boş Bırakılamaz!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Şifre Tekrar"
              name={'passwordAgain'}
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Şifre Tekrar Alanı Boş Bırakılamaz!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        'The new password that you entered do not match!'
                      )
                    )
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-indigo-800"
                size="large"
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Do you have an acoount?&nbsp;
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6">
                {carouselCardData.map((carouselCard, i) => {
                  return (
                    <span key={i}>
                      <CarouselContent
                        imgPath={carouselCard.imgPath}
                        title={carouselCard.title}
                        desc={carouselCard.desc}
                      />
                    </span>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
