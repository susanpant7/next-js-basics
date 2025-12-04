import { User } from "@/app/types/User";
import { notFound } from "next/navigation";

interface UserPageProps {
    params: Promise<{
      userId: string;
    }>;
}

export default async function UserDetails({params}: UserPageProps) {
    const { userId } = await params;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if(!response.ok){
        return notFound();
      }
      const user: User = await response.json();
      
      return (
        <>
            <div>
                <h1>User Details</h1>

                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
        </>
    )
}