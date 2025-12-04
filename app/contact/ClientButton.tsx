"use client";

export default function ClientButton() {
  return (
    <button onClick={() => {
      alert("hello from the button");
    }}>Click me</button>
  )
}