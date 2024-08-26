"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { MenuIcon, BellIcon, HomeIcon, BarChartIcon, UsersIcon, SettingsIcon, FilterIcon, PlusIcon } from "lucide-react"
import { Image } from "@nextui-org/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"
import Link from "next/link"

const navItems = [
    { icon: HomeIcon, label: "Dashboard", href: "#" },
    { icon: BarChartIcon, label: "Analytics", href: "#" },
    { icon: UsersIcon, label: "Customers", href: "#" },
    { icon: SettingsIcon, label: "Settings", href: "#" },
]

export default function DashboardLayout() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    return (
        <div className="flex h-screen flex-col">
            <header className="flex h-14 items-center border-b bg-black px-4 lg:px-6">
                <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <MenuIcon className="h-6 w-6" color="white" />
                    <span className="sr-only">Toggle Navigation Menu</span>
                </Button>
                <div className="flex items-center space-x-2">
                    <Image src="/banner-white.png" alt="hello" width={180} height={60} />
                </div>
                {
                    isLogged ? (
                        <div className="ml-auto flex items-center space-x-4">
                            <Button variant="ghost" size="icon" className="relative">
                                <BellIcon className="h-5 w-5" />
                                <span className="sr-only">Notifications</span>
                                <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600"></span>
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="sr-only">User menu</span>
                            </Button>
                        </div>
                    ) : (
                        <div className="ml-auto flex items-center space-x-4">
                            <Button className="hidden sm:flex">Sign Up</Button>
                            <Button>Sign In</Button>
                        </div>
                    )
                }
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside className={cn(
                    "border-r bg-black transition-all duration-300",
                    isExpanded ? "w-64" : "w-[70px]"
                )}>
                    <ScrollArea className="flex h-screen flex-col">
                        <nav className="flex flex-col gap-2 p-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-2 rounded-lg px-2 py-2 hover:bg-white",
                                        !isExpanded && "justify-center"
                                    )}
                                >
                                    <item.icon className="h-5 w-5 shrink-0" />
                                    <span
                                        className={cn(
                                            "text-sm transition-opacity",
                                            isExpanded ? "opacity-100" : "opacity-0"
                                        )}
                                    >
                                        {isExpanded ? item.label : "" }
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </ScrollArea>
                </aside>
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
            </div>
        </div>
    )
}