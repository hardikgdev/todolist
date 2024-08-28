"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { MenuIcon, BellIcon, HomeIcon, BarChartIcon, UsersIcon, SettingsIcon, ListTodo } from "lucide-react"
import { Image } from "@nextui-org/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"
import Link from "next/link"
import { useRouter } from 'next/navigation'

const navItems = [
    { icon: HomeIcon, label: "Dashboard", href: "/" },
    { icon: ListTodo, label: "ToDo", href: "/todo" },
    { icon: UsersIcon, label: "Customers", href: "#" },
    { icon: SettingsIcon, label: "Settings", href: "#" },
]

export default function DashboardLayout({children}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const router = useRouter()

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
                            <Button className="hidden sm:flex" onClick={(() => router.push('/signup'))}>Sign Up</Button>
                            <Button onClick={(() => router.push('/signin'))}>Sign In</Button>
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
                                        "flex items-center space-x-2 rounded-lg px-2 py-2 hover:bg-gray-900",
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
                <div className="flex flex-1">
                    {children}
                </div>       
            </div>
        </div>
    )
}