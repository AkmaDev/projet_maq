import Image from "next/image"

const ImgCustom = ({image}) => {
  return (
    <Image
    src={image.src}
    width={image.width}
    height={image.height}
    alt={image.alt}
    className="sm:w-32"
    />
  )
}

export default ImgCustom
