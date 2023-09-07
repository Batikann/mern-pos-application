import { Button, Modal } from 'antd'

const BillModal = ({ title, isModalOpen, showModal }: any) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={showModal}
      footer={null}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="text-4xl font-bold text-slate-700 my-6">LOGO</div>
            <div className="flex gap-4 justify-between">
              <div className="text-md flex flex-col gap-1">
                <p className="font-bold text-slate-700">Bill Details</p>
                <p>Unwrapped</p>
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
                <p>0041</p>
                <p className="font-bold text-slate-700">Date of Issue</p>
                <p>2023-09-05</p>
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
                      Piece
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
                  <tr className=" border-b border-slate-200">
                    <td className="py-4 hidden sm:table-cell">
                      <img
                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                        alt=""
                        className="w-16 h-16 object-contain "
                      />
                    </td>
                    <td>
                      <p className="font-medium sm:py-0 py-6">
                        Iphone 14 Pro Max
                      </p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>999$</p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>3</p>
                    </td>
                    <td className="sm:text-center text-right hidden sm:table-cell">
                      <p>2997$</p>
                    </td>
                    <td
                      className="sm:text-center text-right sm:hidden"
                      colSpan={4}
                    >
                      <p>2997$</p>
                    </td>
                  </tr>
                  <tr className=" border-b border-slate-200">
                    <td className="py-4 hidden sm:table-cell">
                      <img
                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                        alt=""
                        className="w-16 h-16 object-contain "
                      />
                    </td>
                    <td>
                      <p className="font-medium sm:py-0 py-6">
                        Iphone 14 Pro Max
                      </p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>999$</p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>3</p>
                    </td>
                    <td className="sm:text-center text-right hidden sm:table-cell">
                      <p>2997$</p>
                    </td>
                    <td
                      className="sm:text-center text-right sm:hidden"
                      colSpan={4}
                    >
                      <p>2997$</p>
                    </td>
                  </tr>
                  <tr className=" border-b border-slate-200">
                    <td className="py-4 hidden sm:table-cell">
                      <img
                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                        alt=""
                        className="w-16 h-16 object-contain "
                      />
                    </td>
                    <td>
                      <p className="font-medium sm:py-0 py-6">
                        Iphone 14 Pro Max
                      </p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>999$</p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>3</p>
                    </td>
                    <td className="sm:text-center text-right hidden sm:table-cell">
                      <p>2997$</p>
                    </td>
                    <td
                      className="sm:text-center text-right sm:hidden"
                      colSpan={4}
                    >
                      <p>2997$</p>
                    </td>
                  </tr>
                  <tr className=" border-b border-slate-200">
                    <td className="py-4 hidden sm:table-cell">
                      <img
                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                        alt=""
                        className="w-16 h-16 object-contain "
                      />
                    </td>
                    <td>
                      <p className="font-medium sm:py-0 py-6">
                        Iphone 14 Pro Max
                      </p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>999$</p>
                    </td>
                    <td className="text-center hidden sm:table-cell">
                      <p>3</p>
                    </td>
                    <td className="sm:text-center text-right hidden sm:table-cell">
                      <p>2997$</p>
                    </td>
                    <td
                      className="sm:text-center text-right sm:hidden"
                      colSpan={4}
                    >
                      <p>2997$</p>
                    </td>
                  </tr>
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
                      <p>55555$</p>
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
                      <p className="text-red-600 font-medium">+444$</p>
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
                      <p className="font-medium">543432$</p>
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
        <Button type="primary" size="large" className="bg-indigo-800">
          Yazdır
        </Button>
      </div>
    </Modal>
  )
}
export default BillModal
