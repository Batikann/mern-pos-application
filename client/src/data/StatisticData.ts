interface statisticCardType {
  id: number
  title: string
  imagePath: string
  count: number
}

export const statisticCards: statisticCardType[] = [
  { id: 1, title: 'Total Customer', imagePath: 'images/user.png', count: 6 },
  { id: 2, title: 'Total Earnings', imagePath: 'images/money.png', count: 6 },
  { id: 3, title: 'Total Sale', imagePath: 'images/sale.png', count: 6 },
  { id: 4, title: 'Total Products', imagePath: 'images/product.png', count: 6 },
]
