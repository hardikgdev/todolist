import DashboardLayout from "@/components/blocks/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FilterIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
      <main className="flex flex-1 flex-col overflow-hidden bg-verylight-org">
      <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coming Soon</h1>
          <p className="text-muted-foreground">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </CardContent>
      </Card>
    </div>
  </main>
  );
}
