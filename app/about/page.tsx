"use client";
// this is a client component
// Render-then-fetch
// client components are used to render the page on the client or browser

// client components can not be async

// Client Components can re-render multiple times in the browser whenever state changes.
// The problem: You can't update the DOM while waiting for async operations
// When state changes:

// React needs to re-render the component immediately
// The component function must return new JSX right now
// React must update the DOM without delay

// But if the component is async:

// State changes trigger a re-render
// The async component function starts running
// It hits an await and pauses
// React is stuck: it can't update the DOM because it doesn't have the new JSX yet
// The component is still waiting for async operations to complete

// The conflict: React needs immediate JSX to update the screen, but async functions need time to wait for their operations. These two requirements are incompatible.

// State changes → Component re-renders → Hits await → Pauses → 
// ??? User sees old UI? Frozen UI? ??? → Eventually completes → 
// Now update DOM? (Too late, user already interacted again)


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