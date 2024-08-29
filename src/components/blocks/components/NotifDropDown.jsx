import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, BellIcon, Check } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"


export default function NotifDropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New Message", description: "John Doe sent you a message", read: false },
    { id: 2, title: "Friend Request", description: "Jane Smith wants to connect", read: false },
    { id: 3, title: "New Comment", description: "You received a comment on your post", read: false },
    { id: 4, title: "Event Reminder", description: "Your event starts in 1 hour", read: false },
    { id: 5, title: "System Update", description: "A new version is available", read: false },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative focus-visible:ring-0">
          <BellIcon className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          {unreadCount > 0 && (
            <div className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500">
              <span className="text-white text-xs">{unreadCount}</span>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <div className="flex items-center justify-between px-4 py-2">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={handleMarkAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.slice(0, 10).map((notification) => (
            <div key={notification.id} className={`flex items-start gap-2 p-4 ${notification.read ? 'opacity-50' : ''}`}>
              <Bell className="h-5 w-5 text-blue-500 mt-1" aria-hidden="true" />
              <div className="flex-grow">
                <h4 className="text-sm font-medium">{notification.title}</h4>
                <p className="text-sm text-gray-500">{notification.description}</p>
              </div>
              {!notification.read && (
                <Button variant="ghost" size="sm" onClick={() => handleMarkAsRead(notification.id)}>
                  <Check className="h-4 w-4" />
                  <span className="sr-only">Mark as read</span>
                </Button>
              )}
            </div>
          ))}
        </div>
        {notifications.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No notifications
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}