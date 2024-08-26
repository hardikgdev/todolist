"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { MenuIcon, BellIcon } from "lucide-react"
import { Image } from "@nextui-org/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
                            <Button>Sign Up</Button>
                            <Button>Sign In</Button>
                        </div>
                    )
                }
            </header>
        </div>
    )
}