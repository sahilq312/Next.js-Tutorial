import React from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/Userposts";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(id);
  const user: User = await userData;

  if(!user.name){
    return {
        title: "user not found"
    }
  }
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { id } }: Params) {
  const userData: Promise<User> = getUser(id);
  const userPostsData: Promise<Post[]> = getUserPosts(id);

  // If not progressively rendering with Suspense, use Promise.all
  //const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData;
  if(!user.name){
    return notFound;
  }

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  return users.map((user) => ({ userid: user.id.toString() }));
}
