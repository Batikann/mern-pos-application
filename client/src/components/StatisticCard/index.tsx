interface StatisticCardProps {
  imgPath: string
  title: string
  count: number
}

const StatisticCard = ({ imgPath, title, count }: StatisticCardProps) => {
  return (
    <div className="statistic-card bg-gray-800 text-white flex gap-6 p-6 items-center  rounded-lg">
      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center ">
        <img src={imgPath} alt="customer" className="w-16 h-16" />
      </div>
      <div>
        <h3 className="text-slate-500 text-lg mb-2">{title}</h3>
        <p className="font-bold text-xl">{count}</p>
      </div>
    </div>
  )
}
export default StatisticCard
