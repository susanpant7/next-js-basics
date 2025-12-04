import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div>Contact</div>
      {/* this is a dynamic image */}
      {/* the hostname is the domain name of the website
        the hostname needs to be added to the next.config.js file */}
      <Image
        className="dark:invert"
        src="https://m.media-amazon.com/images/G/01/DiscoTec/2024/CategoryFlips/2025/Spring_Summer/CE/EN/Summer/Browse/CE_Summer25_4594-DT-and-MOB-432x432-EN._CB550344832_UC290,290_.jpg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
    </>
  );
}