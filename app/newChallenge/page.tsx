"use client";

import * as React from "react";
import Navbar from "@/components/ui/navbar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MarkdownEditor from "./markDownEditor";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 w-full h-screen grid-rows-1">
        <div className="bg-white w-screen h-screen">
          <h1 className="text-2xl ml-7 mt-4 font-semibold">
            Create new challenge
          </h1>
          <div>
            <div className="grid grid-cols-2 w-full h-screen grid-rows-1">
              <div>
                <div className="ml-7 mr-7">
                  title*
                  <Input />
                </div>
                <div className="ml-7 mr-7">
                  category*
                  <Input />
                </div>
                <Select>
                  <p className="ml-7 mr-7">
                    level*
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select a difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Moderate">Moderate</SelectItem>
                        <SelectItem value="Hard">Hard</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </p>
                </Select>
                <MarkdownEditor />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-7 mr-7 mt-7 w-screen h-screen">
          Function Name
          <div className="flex w-full max-w-xl items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit" className="bg-purple-600">
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
