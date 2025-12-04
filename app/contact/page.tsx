// this is a server component
// Fetch-then-render
// server components are used to render the page on the server and send the HTML to the client
// loads the page faster because the javascript are not downloaded and executed in the browser
// search engines can index the page faster 
// the search engines can crawl into the contents of the page without having to rely on javascript
// react hooks cannot be used in server components
// browser specific code like useState, useEffect, useContext, onclick, etc. cannot be used in server components

// server components can be async
// Request → Server runs async component → Waits for all awaits → 
//           Generates HTML → Sends to browser → Done (no more renders)

import Image from "next/image";

export default async function Contact() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

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