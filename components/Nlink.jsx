import Link from "next/link"

const Nlink = ({item}) => {
    
  return (
    <Link
    href={item.path}
    className=" py-2 hover:text-yellow-500 text-center"
    >
        {item.label}
    </Link>
  )
}

export default Nlink
