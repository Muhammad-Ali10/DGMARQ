"use client"

import { useState } from "react"
import { ChevronDown, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { categories, regions, amounts } from "@/lib/data"

const FilterSidebar =({ filters, onFilterChange, isMobile = false })=> {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    region: false,
    amount: false,
  })
  const [showMore, setShowMore] = useState({
    categories: false,
    platform: false,
    region: false,
    device: false,
    type: false,
    amount: false,
    availability: false,
  })
  const [regionSearch, setRegionSearch] = useState("")
  const [amountSearch, setAmountSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleShowMore = (section) => {
    setShowMore((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleCheckboxChange = (filterType, value, checked) => {
    const currentValues = filters[filterType] || []
    if (checked) {
      onFilterChange(filterType, [...currentValues, value])
    } else {
      onFilterChange(
        filterType,
        currentValues.filter((v) => v !== value),
      )
    }
  }

  const handlePriceChange = (field, value) => {
    onFilterChange("priceRange", {
      ...filters.priceRange,
      [field]: value,
    })
  }

  const filteredRegions = regions.filter((region) => region.name.toLowerCase().includes(regionSearch.toLowerCase()))
  const filteredAmounts = amounts.filter((amount) => amount.name.toLowerCase().includes(amountSearch.toLowerCase()))

  // Helper function to limit items and show "See More"
  const getLimitedItems = (items, section, limit = 7) => {
    if (showMore[section] || items.length <= limit) {
      return items
    }
    return items.slice(0, limit)
  }

  const platforms = [
    "Steam",
    "PlayStation",
    "Xbox",
    "Nintendo",
    "Riot Games",
    "Roblox",
    "Blizzard",
    "Epic Games",
    "Origin",
    "Uplay",
  ]
  const devices = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile", "Mac", "Linux", "VR"]
  const types = ["KEY", "GIFT", "DLC", "SUBSCRIPTION", "CREDITS"]
  const availabilityOptions = [
    { name: "Items Available in PAKISTAN", value: "available-pakistan" },
    { name: "Items in Stock", value: "in-stock" },
    { name: "Items on Sale", value: "on-sale" },
    { name: "New Arrivals", value: "new-arrivals" },
    { name: "Best Sellers", value: "best-sellers" },
    { name: "Limited Time", value: "limited-time" },
    { name: "Pre-Orders", value: "pre-orders" },
    { name: "Digital Only", value: "digital-only" },
  ]

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("categories")}>
          <h3 className="font-semibold text-lg">Categories</h3>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.categories ? "rotate-180" : ""}`} />
        </div>
        {expandedSections.categories && (
          <div className="mt-4 space-y-2">
            {getLimitedItems(categories, "categories").map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.name}`}
                    checked={filters.categories.includes(category.name)}
                    onCheckedChange={(checked) => handleCheckboxChange("categories", category.name, checked)}
                  />
                  <Label htmlFor={`category-${category.name}`} className="text-sm cursor-pointer">
                    {category.name}
                  </Label>
                </div>
                <Badge variant="secondary" className="bg-gray-600 text-white">
                  {category.count}
                </Badge>
              </div>
            ))}
            {categories.length > 7 && (
              <Button
                variant="ghost"
                className="text-white hover:bg-[#2563eb] w-full justify-start p-0 h-auto"
                onClick={() => toggleShowMore("categories")}
              >
                <ChevronDown
                  className={`w-4 h-4 mr-2 transition-transform ${showMore.categories ? "rotate-180" : ""}`}
                />
                {showMore.categories ? "Show Less" : `Show More (${categories.length - 7} more)`}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-4">Price (USD)</h3>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="From"
            value={filters.priceRange.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
            className="bg-[#1e3a8a] border-gray-600 text-white placeholder:text-gray-400"
          />
          <span className="text-white">—</span>
          <Input
            placeholder="To"
            value={filters.priceRange.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
            className="bg-[#1e3a8a] border-gray-600 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Availability */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-4">Availability</h3>
        <div className="space-y-3">
          {getLimitedItems(availabilityOptions, "availability").map((option) => (
            <div key={option.value} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={option.value}
                  checked={filters.availability.includes(option.value)}
                  onCheckedChange={(checked) => handleCheckboxChange("availability", option.value, checked)}
                />
                <Label htmlFor={option.value} className="text-sm cursor-pointer">
                  {option.name}
                </Label>
              </div>
              <Badge variant="secondary" className="bg-gray-600 text-white">
                936
              </Badge>
            </div>
          ))}
          {availabilityOptions.length > 7 && (
            <Button
              variant="ghost"
              className="text-white hover:bg-[#2563eb] w-full justify-start p-0 h-auto"
              onClick={() => toggleShowMore("availability")}
            >
              <ChevronDown
                className={`w-4 h-4 mr-2 transition-transform ${showMore.availability ? "rotate-180" : ""}`}
              />
              {showMore.availability ? "Show Less" : `Show More (${availabilityOptions.length - 7} more)`}
            </Button>
          )}
        </div>
      </div>

      {/* Platform */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-4">Platform</h3>
        <div className="space-y-2">
          {getLimitedItems(platforms, "platform").map((platform) => (
            <div key={platform} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`platform-${platform}`}
                  checked={filters.platform.includes(platform)}
                  onCheckedChange={(checked) => handleCheckboxChange("platform", platform, checked)}
                />
                <Label htmlFor={`platform-${platform}`} className="text-sm cursor-pointer">
                  {platform}
                </Label>
              </div>
              <Badge variant="secondary" className="bg-gray-600 text-white">
                936
              </Badge>
            </div>
          ))}
          {platforms.length > 7 && (
            <Button
              variant="ghost"
              className="text-white hover:bg-[#2563eb] w-full justify-start p-0 h-auto"
              onClick={() => toggleShowMore("platform")}
            >
              <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${showMore.platform ? "rotate-180" : ""}`} />
              {showMore.platform ? "Show Less" : `Show More (${platforms.length - 7} more)`}
            </Button>
          )}
        </div>
      </div>

      {/* Region */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("region")}>
          <h3 className="font-semibold text-lg">Region</h3>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.region ? "rotate-180" : ""}`} />
        </div>
        {expandedSections.region && (
          <div className="mt-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search for Region"
                value={regionSearch}
                onChange={(e) => setRegionSearch(e.target.value)}
                className="bg-[#1e3a8a] border-gray-600 text-white placeholder:text-gray-400 pl-10"
              />
            </div>
            {getLimitedItems(filteredRegions, "region").map((region) => (
              <div key={region.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`region-${region.name}`}
                    checked={filters.region.includes(region.name)}
                    onCheckedChange={(checked) => handleCheckboxChange("region", region.name, checked)}
                  />
                  <Label htmlFor={`region-${region.name}`} className="text-sm cursor-pointer">
                    {region.name}
                  </Label>
                </div>
                <Badge variant="secondary" className="bg-gray-600 text-white">
                  {region.count}
                </Badge>
              </div>
            ))}
            {filteredRegions.length > 7 && (
              <Button
                variant="ghost"
                className="text-white hover:bg-[#2563eb] w-full justify-start p-0 h-auto"
                onClick={() => toggleShowMore("region")}
              >
                <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${showMore.region ? "rotate-180" : ""}`} />
                {showMore.region ? "Show Less" : `Show More (${filteredRegions.length - 7} more)`}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Device */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-4">Device</h3>
        <div className="space-y-2">
          {getLimitedItems(devices, "device").map((device) => (
            <div key={device} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`device-${device}`}
                  checked={filters.device.includes(device)}
                  onCheckedChange={(checked) => handleCheckboxChange("device", device, checked)}
                />
                <Label htmlFor={`device-${device}`} className="text-sm cursor-pointer">
                  {device}
                </Label>
              </div>
              <Badge variant="secondary" className="bg-gray-600 text-white">
                936
              </Badge>
            </div>
          ))}
          {devices.length > 7 && (
            <Button
              variant="ghost"
              className="text-white hover:bg-[#2563eb] w-full justify-start p-0 h-auto"
              onClick={() => toggleShowMore("device")}
            >
              <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${showMore.device ? "rotate-180" : ""}`} />
              {showMore.device ? "Show Less" : `Show More (${devices.length - 7} more)`}
            </Button>
          )}
        </div>
      </div>

      {/* Type */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-4">Type</h3>
        <div className="space-y-2">
          {getLimitedItems(types, "type").map((type) => (
            <div key={type} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={filters.type.includes(type)}
                  onCheckedChange={(checked) => handleCheckboxChange("type", type, checked)}
                />
                <Label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                  {type}
                </Label>
              </div>
              <Badge variant="secondary" className="bg-gray-600 text-white">
                936
              </Badge>
            </div>
          ))}
          {types.length > 7 && (
            <Button
              variant="ghost"
              className="text-white hover:bg-[#2563eb] w-full justify-start p-0 h-auto"
              onClick={() => toggleShowMore("type")}
            >
              <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${showMore.type ? "rotate-180" : ""}`} />
              {showMore.type ? "Show Less" : `Show More (${types.length - 7} more)`}
            </Button>
          )}
        </div>
      </div>

      {/* Amount */}
      <div className="bg-[#1e40af] rounded-lg p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("amount")}>
          <h3 className="font-semibold text-lg">Amount</h3>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.amount ? "rotate-180" : ""}`} />
        </div>
        {expandedSections.amount && (
          <div className="mt-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search for Amount"
                value={amountSearch}
                onChange={(e) => setAmountSearch(e.target.value)}
                className="bg-[#1e3a8a] border-gray-600 text-white placeholder:text-gray-400 pl-10"
              />
            </div>
            {getLimitedItems(filteredAmounts, "amount").map((amount) => (
              <div key={amount.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`amount-${amount.name}`}
                    checked={filters.amount.includes(amount.name)}
                    onCheckedChange={(checked) => handleCheckboxChange("amount", amount.name, checked)}
                  />
                  <Label htmlFor={`amount-${amount.name}`} className="text-sm cursor-pointer">
                    {amount.name}
                  </Label>
                </div>
                <Badge variant="secondary" className="bg-gray-600 text-white">
                  {amount.count}
                </Badge>
              </div>
            ))}
            {filteredAmounts.length > 7 && (
              <Button
                variant="ghost"
                className="text-white hover:bg-[#2563eb] w-full justify-start p-0 h-auto"
                onClick={() => toggleShowMore("amount")}
              >
                <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${showMore.amount ? "rotate-180" : ""}`} />
                {showMore.amount ? "Show Less" : `Show More (${filteredAmounts.length - 7} more)`}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )

  // Mobile version with Sheet
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="fixed top-4 left-4 z-50 bg-[#1e40af] border-[#1e40af] text-white hover:bg-[#2563eb] lg:hidden"
          >
            <Menu className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-[#1e3a8a] text-white p-0 border-r-[#1e40af]">
          <div className="p-4 border-b border-[#1e40af]">
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-80px)]">
            <div className="p-4">
              <SidebarContent />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    )
  }

  // Desktop version
  return (
    <div className="w-80  text-white p-4 sticky top-0 hidden lg:block">
     
        <SidebarContent />
    </div>
  )
}


export default FilterSidebar