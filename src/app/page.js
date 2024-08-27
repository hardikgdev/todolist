import DashboardLayout from "@/components/blocks/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FilterIcon, PlusIcon } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-verylight-org">
          <div className="flex h-14 items-center justify-between border-b bg-primary px-4 lg:px-6">
            <h1 className="text-2xl font-semibold">Welcome to Your Dashboard</h1>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm" variant="outline">
                <PlusIcon className="mr-2 h-4 w-4" />
                Add New
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 lg:p-6">
            <p className="mb-4 text-gray-600">This is where your main content would go.</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
                <div key={i} className="rounded-lg border bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-semibold">Card {i}</h2>
                  <p className="text-gray-600">This is some placeholder content for card {i}.</p>
                </div>
              ))}
            </div>
          </div>
        </main>
  );
}
