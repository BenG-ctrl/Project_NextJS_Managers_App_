"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/app/challenges/type";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "level",
    header: "Difficulty",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
  },
  {
    accessorKey: "",
    header: "Actions",
  },
];
