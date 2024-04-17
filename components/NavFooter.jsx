import Image from "next/image";
import Link from "next/link";
const NavFooter = () => {
  return (
    <div className=" p-20 flex justify-around bg-black text-white gap-10 sm:gap-0" style={{height: 150}}>
    <div className=" flex justify-center items-center gap-6">
      <Image
                src={"/assets/images/logo_white.png"}
                alt="maq logo"
                className=""
                width={70}
                height={34}
                />
        <p className="text-xs">@ 2020 - Mint.All Right Reserved</p>
    </div>
    <Link href={"#work"} className="flex justify-center items-center gap-2">
      <p className="text-xs"> BACK TO TOP</p>
      <Image
                src={"/assets/images/up_arrow_white.png"}
                alt="maq logo"
                className=""
                width={15}
                height={15}
                />

    </Link>
    </div>
  )
}

export default NavFooter
