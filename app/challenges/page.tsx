import { columns } from "@/app/challenges/columns";
import DataTable from "@/components/ui/data-table";
import getUsers from "@/app/challenges/index";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";

export default async function Home() {
  const data = await getUsers();

  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-3xl mt-1 mb-4">Your Challenges</h1>
      <Link href={"/newChallenge"}>
        <Button className="bg-purple-800">New Challenge</Button>
      </Link>
      <main className="flex h-screen flex-col justify-between p-24">
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
