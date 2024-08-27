"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FilterIcon } from "lucide-react";

export default function SortButton() {
  const [sort, setSort] = useState("all");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
            <FilterIcon className="mr-2 h-4 w-4" />
            Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sorting</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem value="all" checked={sort === "all"} onCheckedChange={() => setSort("all")} >All Tasks</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem value="today" checked={sort === "today"} onCheckedChange={() => setSort("today")} >Today Tasks</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem value="pending" checked={sort === "pending"} onCheckedChange={() => setSort("pending")} >Pending Tasks</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem value="upcoming" checked={sort === "upcoming"} onCheckedChange={() => setSort("upcoming")} >Upcoming Tasks</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem value="completed" checked={sort === "completed"} onCheckedChange={() => setSort("completed")} >Completed Tasks</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
