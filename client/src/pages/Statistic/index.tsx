import StatisticCard from '@/components/StatisticCard'
import { statisticCards } from '@/data/StatisticData'
import { Area } from '@ant-design/charts'
import { Pie } from '@ant-design/plots'
import { useState, useEffect } from 'react'

const Statistic = () => {
  const [data, setData] = useState([])
  const [products, setProducts] = useState()
  const asyncFetch = () => {
    fetch('http://localhost:5000/api/bills/get-all')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }

  const getProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/products/get-all', {
        method: 'GET',
      })
      const val = await res.json()
      setProducts(val)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    asyncFetch()
    getProducts()
  }, [])

  const config = {
    data,
    xField: 'customerName',
    yField: 'subTotal',
    xAxis: {
      range: [0, 1],
    },
  }
  const configg = {
    appendPadding: 10,
    data,
    angleField: 'subTotal',
    colorField: 'customerName',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Toplam\nDeger',
      },
    },
  }

  const totalAmount = () => {
    const amount = data.reduce((total, item) => item.totalAmount + total, 0)
    return `${amount.toFixed(2)}₺`
  }
  return (
    <div className="px-6 md:pb-20">
      <h1 className="text-4xl font-bold text-center mb-4">My Statistics</h1>
      <div>
        <h2 className="text-lg">
          Welcome{' '}
          <span className="text-green-700 font-bold text-xl">admin</span>
        </h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-10 md:gap-6 gap-4 mt-2 mb-8">
          {statisticCards.map((statisticCard, i) => {
            return (
              <span key={i}>
                <StatisticCard
                  imgPath={statisticCard.imagePath}
                  title={statisticCard.title}
                  count={statisticCard.count}
                />
              </span>
            )
          })}
        </div>
        <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
          <div className="lg:w-1/2 lg:h-full h-72">
            <Area {...config} />
          </div>
          <div className="lg:w-1/2 lg:h-full h-72">
            <Pie {...configg} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Statistic
