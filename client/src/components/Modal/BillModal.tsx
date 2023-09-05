import { Form, Modal } from 'antd'

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
              <div className="text-md flex flex-col gap-1">
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
                      className=" text-left py-4 text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className=" text-left py-4 text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className=" text-left py-4 text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      Piece
                    </th>
                    <th
                      scope="col"
                      className=" text-left py-4 text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </article>
        </div>
      </section>
    </Modal>
  )
}
export default BillModal
