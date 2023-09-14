import { clearCart } from '@/redux/CartSlice'
import { useAppDispatch } from '@/redux/store'
import { Form, Modal, Input, Select, Button, Card, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ModalComponets = ({ showModal, isModalOpen, title }: any) => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onFinish = async (values: any) => {
    try {
      await fetch('http://localhost:5000/bill', {
        method: 'POST',
        body: JSON.stringify({
          ...values,
          subTotal: cart.total,
          taxt: ((cart.total * cart.tax) / 100).toFixed(2),
          totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
          cartItems: cart.cartItems,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
      message.success('Fatura başarıyla oluşturuldu.')
      console.log(values)

      dispatch(clearCart())
      navigate('/bill')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal title={title} open={isModalOpen} onCancel={showModal} footer={null}>
      <Form layout={'vertical'} onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          name={'customerName'}
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input placeholder="Bir Müşteri Adı Yazınız" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name={'customerPhoneNumber'}
          label="Tel No"
        >
          <Input placeholder="Bir Tel No Yazınız" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          rules={[{ required: true }]}
          name={'paymentMethod'}
        >
          <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>{cart.total}$</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam %${cart.tax}</span>
            <span className="text-red-600">
              +{(cart.total * cart.tax) / 100}$
            </span>
          </div>
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              $
            </b>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={showModal}
              htmlType="submit"
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  )
}
export default ModalComponets
