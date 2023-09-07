interface CarouselProps {
  imgPath: string
  title: string
  desc: string
}

const CarouselContent = ({ imgPath, title, desc }: CarouselProps) => {
  return (
    <div className="!flex flex-col items-center justify-center h-full mb-10  ">
      <img src={imgPath} alt={title} className="w-[600px] h-[500px]" />
      <h3 className="text-4xl text-white text-center font-bold">{title}</h3>
      <p className="mt-5 text-2xl text-white text-center">{desc}</p>
    </div>
  )
}
export default CarouselContent
