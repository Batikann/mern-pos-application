import StatisticCard from '@/components/StatisticCard'
import { statisticCards } from '@/data/StatisticData'
import { Area } from '@ant-design/charts'
import { Pie } from '@ant-design/plots'
import { useState, useEffect } from 'react'

const Statistic = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }

  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  }
  const configg = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
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
        content: 'AntV\nG2Plot',
      },
    },
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
