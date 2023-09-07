export interface CarouselCardType {
  id: number
  title: string
  desc: string
  imgPath: string
}

export const carouselCardData: CarouselCardType[] = [
  {
    id: 1,
    title: 'Responsive',
    desc: 'Tüm Cihazlarla Uyumluluk.',
    imgPath: 'images/responsive.svg',
  },
  {
    id: 2,
    title: 'Statistics',
    desc: 'Geniş Tutulan İstatistikler.',
    imgPath: 'images/statistic.svg',
  },
  {
    id: 3,
    title: 'Müşteri Memnuniyeti',
    desc: 'Tüm Cihazlarla Uyumludur.',
    imgPath: 'images/customer.svg',
  },
  {
    id: 4,
    title: 'Yönetici Paneli',
    desc: 'Tek Yerden Yönetim.',
    imgPath: 'images/admin.svg',
  },
]
