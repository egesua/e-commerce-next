import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[167px] bg-black flex items-center justify-center">
      <div className="h-[137px] relative w-full">
        <Image src={"/banner.jpg"} fill alt="bannerPhoto" />
      </div>
    </div>
  )
}

export default Banner;
