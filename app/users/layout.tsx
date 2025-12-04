import React from "react";

export default function UserLayout({children}:{children:React.ReactNode}){
    return (
        <section style={{ padding: "2rem" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Users Section</h1>
            <div>
                {children}
            </div>
        </section>
    )
}