import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const FilterSidebar = ({
  filters,
  checkboxFilters,
  setCheckboxFilters,
  updateFilters,
  handleCheckboxChange,
  handleInputChange,
  platforms,
  regions,
  categories
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    regions: true,
    platforms: true
  });

  const [searchTerms, setSearchTerms] = useState({
    regions: "",
    categories: "",
    platforms: ""
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSearch = (section, value) => {
    setSearchTerms(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const filterItems = (items, searchTerm) => {
    if (!searchTerm) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const FilterSection = ({ title, children, section, hasSearch = false, itemCount }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden mb-4 text-white">
      <div className="bg-[#043086] px-4 py-3 flex items-center justify-between">
        <h3 className="text-white font-medium text-sm uppercase tracking-wide">
          {title}
        </h3>
        {itemCount > 0 && (
          <span className="text-base text-white px-2 py-1 rounded">
            {itemCount}
          </span>
        )}
      </div>
      <div className="py-4 px-3 space-y-3 bg-[#052157]">
        {hasSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder={`Search for ${title}`}
              className="pl-10 bg-transparent text-white placeholder-white focus:border-blue-500"
              value={searchTerms[section] || ""}
              onChange={(e) => handleSearch(section, e.target.value)}
            />
          </div>
        )}
        <div className="space-y-1">
          {children}
        </div>
        {section && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleSection(section)}
            className="w-full text-white"
          >
            {expandedSections[section] ? (
              <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
            ) : (
              <>Show More <ChevronDown className="ml-2 h-4 w-4" /></>
            )}
          </Button>
        )}
      </div>
    </div>
  );

  const CheckboxItem = ({ id, title, type, count }) => {
    const isChecked = checkboxFilters[type]?.includes(id);
    return (
      <div
        className={`flex items-center justify-between py-3 px-2 cursor-pointer bg-[#052157] transition-all duration-200 group ${
          isChecked
            ? 'bg-[#06051C]/60 hover:bg-[#06051C]'
            : 'hover:bg-slate-700'
        }`}
        onClick={() => handleCheckboxChange(type, id)}
      >
        <div className="flex items-center space-x-3">
          <Checkbox
            id={id}
            checked={isChecked}
            onCheckedChange={() => handleCheckboxChange(type, id)}
            className="sr-only"
          />
          <Label
            htmlFor={id}
            className={`text-sm cursor-pointer transition-colors ${
              isChecked
                ? 'text-white font-medium'
                : 'text-slate-200 group-hover:text-white'
            }`}
          >
            {title}
          </Label>
        </div>
        {count && (
          <span className={`text-xs px-2 py-1 rounded transition-colors ${
            isChecked
              ? 'text-red-100 bg-blue-500'
              : 'text-slate-400 bg-slate-700 group-hover:bg-slate-600'
          }`}>
            {count}
          </span>
        )}
      </div>
    );
  };

  const filteredCategories = filterItems(categories, searchTerms.categories);
  const filteredRegions = filterItems(regions, searchTerms.regions);
  const filteredPlatforms = filterItems(platforms, searchTerms.platforms);

  const displayedCategories = expandedSections.categories
    ? filteredCategories
    : filteredCategories.slice(0, 5);

  const displayedRegions = expandedSections.regions
    ? filteredRegions
    : filteredRegions.slice(0, 5);

  const displayedPlatforms = expandedSections.platforms
    ? filteredPlatforms
    : filteredPlatforms.slice(0, 5);

  return (
    <aside className="w-80 space-y-4">
      {/* Categories */}
      <FilterSection
        title="Categories"
        section="categories"
        hasSearch={categories.length > 10}
        itemCount={checkboxFilters.categoryId?.length || 0}
      >
        {displayedCategories.map(cat => (
          <CheckboxItem
            key={cat._id}
            id={cat._id}
            title={cat.title}
            type="categoryId"
            count={cat.count}
          />
        ))}
      </FilterSection>

      {/* Price Range */}
      <div className="bg-slate-800 rounded-lg overflow-hidden mb-4">
        <div className="bg-[#043086] px-4 py-3">
          <h3 className="text-white font-medium text-sm uppercase tracking-wide">
            Price (USD)
          </h3>
        </div>
        <div className="p-4 bg-[#06051C]/60">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="From"
                value={filters.minPrice || ""}
                onChange={(e) => handleInputChange("minPrice", e.target.value)}
                className="bg-transparent text-white placeholder-slate-400 focus:border-red-500"
              />
            </div>
            <span className="text-slate-400">—</span>
            <div className="flex-1">
              <Input
                type="number"
                placeholder="To"
                value={filters.maxPrice || ""}
                onChange={(e) => handleInputChange("maxPrice", e.target.value)}
                className="bg-transparent border-slate-600 text-white placeholder-slate-400 focus:border-red-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Region */}
      <FilterSection
        title="Region"
        section="regions"
        hasSearch={regions.length > 5}
        itemCount={checkboxFilters.region?.length || 0}
      >
        {displayedRegions.map(region => (
          <CheckboxItem
            key={region._id}
            id={region._id}
            title={region.title}
            type="region"
            count={region.count}
          />
        ))}
      </FilterSection>

      {/* Platform */}
      <FilterSection
        title="Platform"
        section="platforms"
        hasSearch={platforms.length > 5}
        itemCount={checkboxFilters.platform?.length || 0}
      >
        {displayedPlatforms.map(platform => (
          <CheckboxItem
            key={platform._id}
            id={platform._id}
            title={platform.title}
            type="platform"
            count={platform.count}
          />
        ))}
      </FilterSection>
    </aside>
  );
};

export default FilterSidebar;