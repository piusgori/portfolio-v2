import Image from "next/image"


const Logo = () => {
  return (
    <Image
        src='/logo.png'
        alt="Ian Pius"
        height={50}
        width={50}
    />
  )
}

export default Logo