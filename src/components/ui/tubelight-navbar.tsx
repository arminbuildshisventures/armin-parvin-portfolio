import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)

  // Find active tab based on current route
  const activeItem = items.find(item => item.url === location.pathname) || items[0]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-background/80 pixel-border backdrop-blur-lg py-2 px-2 rounded-full pixel-shadow">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeItem.name === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "relative cursor-pointer font-secondary text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/70 hover:text-accent",
                isActive && "text-foreground",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute w-20 h-4 bg-accent/30 rounded-full blur-md -top-1 -left-2" />
                  <div className="absolute w-16 h-3 bg-accent/40 rounded-full blur-sm -top-0.5" />
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
