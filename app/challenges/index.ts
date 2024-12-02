import { User } from "@/app/challenges/type";

const getUsers = async (): Promise<User[]> => {
  const data = await fetch("http://localhost:5000/challenges");

  return data.json();
};

export default getUsers;
