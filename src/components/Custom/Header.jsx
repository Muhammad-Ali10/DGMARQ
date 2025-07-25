"use client"

import { useState } from "react"
import { Search, ChevronDown, Heart, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"



const categories = [
    "All Categories",
    "PC Games",
    "Console Games",
    "Gift Cards",
    "Software",
    "DLC & Add-ons",
    "Game Keys",
    "Subscriptions",
]

const navigationItems = [
    { name: "Categories", Url: "/steam-gift", hasIcon: <Menu /> },
    { name: "Bestsellers", Url: "/best-sellers" },
    { name: "Steam Gift Cards", Url: "/steam-gift" },
    { name: "Random Keys", Url: "/random-keys" },
    { name: "Software", Url: "/software" },
] 

export default function Header() {
    const [selectedCategory, setSelectedCategory] = useState("All Categories")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-[#1a365d] text-white relative z-50 w-full">
                {/* Main Header */}

                <div className="flex items-center gap-4 max-w-1260 mx-auto py-5">
                    {/* Logo */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Link to="/">
                        <img src="./images/logo.png" alt="Logo" className="w-36 h-11" />
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 text-white items-center">
                        <div className="p-[1px] rounded-md bg-gradient-to-r from-[#172AA4] via-purple-500 to-[#0E9FE2] w-full">
                            <div className="flex w-full rounded-md overflow-hidden bg-[#1a365d] px-4 py-1">
                                <Input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="flex-1 border-0 bg-transparent text-white placeholder:text-white focus-visible:ring-0 shadow-none text-base font-medium font-poppins"
                                />

                                <div className="border-l ml-10 border-gray-200">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                className="bg-transparent hover:bg-transparent outline-0  focus:outline-0 text-white  px-3 py-2.5 h-auto rounded-none text-base font-medium font-poppins"
                                            >
                                                {selectedCategory}
                                                <ChevronDown className="ml-2 h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-48 text-base font-medium font-poppins">
                                            {categories.map((category) => (
                                                <DropdownMenuItem
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    className="text-sm"
                                                >
                                                    {category}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                <Button className="bg-primary rounded-[9px] px-4 py-2.5 h-auto">
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>


                    {/* Right Actions */}
                    <div className="flex items-center gap-2 lg:gap-3">
                        {/* Language Selector */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-transparent border-white/30 text-white hover:bg-white/10 px-2 lg:px-3 py-1.5"
                                >
                                    <span className="text-sm mr-1">🇺🇸</span>
                                    <span className="hidden sm:inline text-sm font-medium">ENG</span>
                                    <ChevronDown className="ml-1 h-3 w-3" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                                <DropdownMenuItem>🇪🇸 Español</DropdownMenuItem>
                                <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
                                <DropdownMenuItem>🇩🇪 Deutsch</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Register Button */}
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 hidden sm:inline-flex">
                            Register
                        </Button>

                        {/* Wishlist */}
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 p-2">
                            <Heart className="h-5 w-5" />
                        </Button>

                        {/* Cart */}
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 p-2">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-white hover:bg-white/10 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden mt-3">
                    <div className="flex w-full bg-white rounded-md overflow-hidden">
                        <Input
                            type="text"
                            placeholder="What are you looking for?"
                            className="flex-1 border-0 bg-transparent text-gray-800 placeholder:text-gray-500 focus-visible:ring-0 px-3 py-2 text-sm"
                        />
                        <Button className="bg-blue-600 hover:bg-blue-700 rounded-none px-3 py-2 h-auto">
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </div>


                {/* Secondary Navigation */}
                <div className="bg-[#153e75] border-t border-blue-700/20 hidden md:block">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between py-2.5">
                            {/* Navigation Items */}
                            <nav className="hidden lg:flex items-center space-x-6">
                                {navigationItems.map((item) => (
                                    <Button asChild   className="flex items-center gap-2 text-white py-2.5 px-5 text-sm font-medium font-poppins max-w-[181px] w-full bg-[#07142E]  rounded-none" >
                                        <Link
                                            key={item.name}
                                            to={item.Url}>
                                            {item.hasIcon && item.hasIcon}
                                            {item.name}
                                        </Link>
                                    </Button>
                                ))}
                            </nav>

                            {/* Mobile Navigation */}
                            <nav className="lg:hidden flex items-center space-x-4 overflow-x-auto py-1 flex-1 scrollbar-hide">
                                {navigationItems.map((item) => (
                                    <Button asChild>
                                        <Link
                                            key={item.name}
                                            to={item.Url}
                                            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors py-1 text-sm font-medium bg-[#07142E]">
                                            {item.hasIcon && item.hasIcon}
                                            {item.name}
                                        </Link>
                                    </Button>
                                ))}
                            </nav>

                            {/* DGMARO Plus Button */}
                            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs lg:text-sm font-medium  px-3 lg:px-4 py-1.5 lg:py-2 ml-2 lg:ml-4 flex-shrink-0 shadow-md">
                                <span className="hidden sm:inline">Save more with </span>
                                <span className="font-bold">DGMARO Plus</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a365d] border-t border-blue-700/20 shadow-lg z-40">
                        <div className="px-4 py-4 space-y-4">
                            {/* Mobile Category Selector */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full justify-between bg-white text-gray-700">
                                        {selectedCategory}
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-full">
                                    {categories.map((category) => (
                                        <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                                            {category}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Mobile Navigation Links */}
                            <div className="space-y-2">
                                {navigationItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 text-white/90 hover:text-white transition-colors py-2 text-sm"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.hasIcon && (
                                            <div className="flex flex-col gap-0.5">
                                                <div className="w-3 h-0.5 bg-white/80 rounded-full"></div>
                                                <div className="w-3 h-0.5 bg-white/80 rounded-full"></div>
                                                <div className="w-3 h-0.5 bg-white/80 rounded-full"></div>
                                            </div>
                                        )}
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* Mobile Register Button */}
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">Register</Button>
                        </div>
                    </div>
                )}
            </header>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </>
    )
}
