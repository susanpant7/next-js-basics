import Link from "next/link";
import { User } from "../types/User";

export default async function Users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>

        {users.map((user) => (
            <div key={user.id} style={{ marginBottom: "8px" }}>
            {user.name}{" "}
            <Link href={`/users/${user.id}`}>
                <button className="px-4 py-2 bg-blue-600 text-white 
                                    rounded hover:bg-blue-700 transition">
                    View User {user.id}
                </button>
            </Link>
            </div>
        ))}
        </div>
    )
}