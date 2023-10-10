import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <h1>Home Page</h1>
      <p className=" flex items-center bg-red-500 h-5 w-16 p-2">
        <Link href={"/users"}>Users</Link>
      </p>
    </main>
  );
}
