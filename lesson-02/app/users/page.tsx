import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export default async function UserPage() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;
  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </section>
  );
  return content
}
