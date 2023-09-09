import './style.css'

interface CategoryCardProps {
  title: string | null
  bgColor: string
  hoverBgColor: string
}

const CategoryCard = ({ title, bgColor, hoverBgColor }: CategoryCardProps) => {
  return (
    <li className={`category-item ${bgColor} ${hoverBgColor}`}>
      <span>{title}</span>
    </li>
  )
}
export default CategoryCard
