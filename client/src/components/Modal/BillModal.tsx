import { Button, Modal } from 'antd'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
const BillModal = ({ title, isModalOpen, showModal, customer }: any) => {
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={showModal}
      footer={null}
      width={800}
    >
      <section className="py-20 bg-black" ref={componentRef}>
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="text-4xl font-bold text-slate-700 my-6">LOGO</div>
            <div className="flex gap-4 justify-between">
              <div className="text-md flex flex-col gap-1">
                <p className="font-bold text-slate-700">Bill Details</p>
                <p>{customer?.customerName}</p>
                <p>Fake Street 123</p>
                <p>San Javier</p>
                <p>CA 1234</p>
              </div>
              <div className="text-md flex flex-col gap-1">
                <p className="font-bold text-slate-700">Bill</p>
                <p>The Boring Company</p>
                <p>Tesla Street 007</p>
                <p>Frisco</p>
                <p>CA 0000</p>
              </div>
              <div className="text-md flex flex-col gap-1">
                <p className="font-bold text-slate-700">Bill Number</p>
                <p>000{Math.floor(Math.random() * 100)}</p>
                <p className="font-bold text-slate-700">Date of Issue</p>
                <p>{customer?.createdAt.substring(0, 10)}</p>
              </div>
              <div className="text-md  flex-col gap-1 hidden sm:flex">
                <p className="font-bold text-slate-700">Terms</p>
                <p>0 Days</p>
                <p className="font-bold text-slate-700">Due</p>
                <p>00.00.00</p>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className=" text-left py-4 text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className=" text-left py-4 text-sm font-normal text-slate-700 s   hidden sm:table-cell"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className=" text-left py-4 text-sm font-normal text-slate-700 sm:hidden  "
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className=" text-center py-4 text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className=" text-center py-4 text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className=" text-center py-4 text-sm font-normal text-slate-700 sm:table-cell "
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customer?.cartItems.map((cartItem) => {
                    return (
                      <tr
                        className=" border-b border-slate-200"
                        key={customer?._id}
                      >
                        <td className="py-4 hidden sm:table-cell">
                          <img
                            src={cartItem.img}
                            alt={cartItem.title}
                            className="w-16 h-16 object-contain "
                          />
                        </td>
                        <td>
                          <p className="font-medium sm:py-0 py-6">
                            {cartItem.title}
                          </p>
                        </td>
                        <td className="text-center hidden sm:table-cell">
                          <p>{cartItem.price}$</p>
                        </td>
                        <td className="text-center hidden sm:table-cell">
                          <p>{cartItem.quantity}</p>
                        </td>
                        <td className="sm:text-center text-right hidden sm:table-cell">
                          <p>{cartItem.price * cartItem.quantity}$</p>
                        </td>
                        <td
                          className="sm:text-center text-right sm:hidden"
                          colSpan={4}
                        >
                          <p>{cartItem.price * cartItem.quantity}toFixed(2)$</p>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="text-right pt-6 hidden sm:table-cell"
                      colSpan={4}
                      scope="row"
                    >
                      <p>Subtotal</p>
                    </th>
                    <th
                      className="text-left pt-6 sm:hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <p>Subtotal</p>
                    </th>
                    <th className="text-right pt-6 font-medium" scope="row">
                      <p>{customer?.subTotal}$</p>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-6 hidden sm:table-cell "
                      colSpan={4}
                      scope="row"
                    >
                      <p>Tax</p>
                    </th>
                    <th
                      className="text-left pt-6 sm:hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <p>Tax</p>
                    </th>
                    <th className="text-right pt-6" scope="row">
                      <p className="text-red-600 font-medium">
                        +{customer?.totalAmount - customer?.subTotal}$
                      </p>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-6 hidden sm:table-cell"
                      colSpan={4}
                      scope="row"
                    >
                      <p>Total</p>
                    </th>
                    <th
                      className="text-left pt-6 sm:hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <p>Total</p>
                    </th>
                    <th className="text-right pt-6" scope="row">
                      <p className="font-medium">{customer?.totalAmount}$</p>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button
          type="primary"
          size="large"
          className="bg-indigo-800"
          onClick={handlePrint}
        >
          Print
        </Button>
      </div>
    </Modal>
  )
}
export default BillModal
