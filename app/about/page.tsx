import Image from "next/image";

export default function About() {
  return (
    <>
        <div>About</div>
        {/* this is a static image */}
        {/* next js automatically optimizes the image */}
        {/* priority is used to tell next js that this image is important */}
        {/* width and height are used to tell next js the size of the image */}
        {/* alt is used to describe the image for accessibility */}
        {/* src is the path to the image. It is relative to the public folder */}
        <Image
          className="dark:invert"
          src="/globe.svg"
          alt="about page image"
          width={100}
          height={20}
          priority
        />
    </>
  )
}