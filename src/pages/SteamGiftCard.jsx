"use client"

import { useState,useEffect, useMemo } from "react"
import { FilterSidebar } from "@/components"
import { GiftCard } from "@/components"
import { giftCards } from "@/lib/data"

const SteamGiftCard = ()=> {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: { min: "", max: "" },
    availability: [],
    platform: [],
    region: [],
    device: [],
    type: [],
    amount: [],
  })

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const filteredCards = useMemo(() => {
    return giftCards.filter((card) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(card.category)) {
        return false
      }

      // Price range filter
      if (filters.priceRange.min && card.price < Number.parseFloat(filters.priceRange.min)) {
        return false
      }
      if (filters.priceRange.max && card.price > Number.parseFloat(filters.priceRange.max)) {
        return false
      }

      // Availability filter
      if (filters.availability.length > 0) {
        if (filters.availability.includes("available-pakistan") && !card.canActivateInPakistan) {
          return false
        }
        if (filters.availability.includes("in-stock") && card.availability !== "in-stock") {
          return false
        }
      }

      // Platform filter
      if (filters.platform.length > 0 && !filters.platform.includes(card.platform)) {
        return false
      }

      // Region filter
      if (filters.region.length > 0 && !filters.region.includes(card.region)) {
        return false
      }

      // Device filter
      if (filters.device.length > 0 && !filters.device.includes(card.device)) {
        return false
      }

      // Type filter
      if (filters.type.length > 0 && !filters.type.includes(card.type)) {
        return false
      }

      // Amount filter
      if (filters.amount.length > 0 && !filters.amount.includes(card.amount)) {
        return false
      }

      return true
    })
  }, [filters])

  return (
    <div className="flex flex-col md:flex-row items-start justify-between max-w-1440 p-5 md:px-11 md:py-6 xl:px-22 xl:py-13 bg-blue-2">
      <FilterSidebar filters={filters} onFilterChange={handleFilterChange} isMobile={isMobile} />      <GiftCard cards={filteredCards} />
    </div>
  )
}

export default SteamGiftCard