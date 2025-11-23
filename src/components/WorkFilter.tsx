import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";
import { PixelCard } from "./PixelCard";
import { useState, useRef, useEffect } from "react";

interface WorkFilterProps {
  availableTags: {
    workTypes: string[];
    industries: string[];
    clientTypes: string[];
  };
  selectedFilters: {
    workTypes: string[];
    industries: string[];
    clientTypes: string[];
  };
  onFilterChange: (category: 'workTypes' | 'industries' | 'clientTypes', value: string) => void;
  onClearAll: () => void;
}

export function WorkFilter({ 
  availableTags, 
  selectedFilters, 
  onFilterChange,
  onClearAll 
}: WorkFilterProps) {
  const hasActiveFilters = 
    selectedFilters.workTypes.length > 0 || 
    selectedFilters.industries.length > 0 || 
    selectedFilters.clientTypes.length > 0;

  const FilterDropdown = ({ 
    title, 
    tags, 
    selectedTags, 
    category 
  }: { 
    title: string; 
    tags: string[]; 
    selectedTags: string[]; 
    category: 'workTypes' | 'industries' | 'clientTypes';
  }) => {
    const selectedCount = selectedTags.length;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);
    
    const handleItemClick = (e: React.MouseEvent, tag: string) => {
      e.stopPropagation();
      onFilterChange(category, tag);
      // Do NOT close the dropdown
    };
    
    return (
      <div className="relative" ref={dropdownRef}>
        <Button 
          variant="outline" 
          className="font-secondary text-sm pixel-border justify-between min-w-[180px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          {selectedCount > 0 && (
            <Badge className="ml-2 pixel-border bg-accent text-accent-foreground">
              {selectedCount}
            </Badge>
          )}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-80 pixel-border bg-background z-50 p-4 shadow-lg">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-primary text-sm">{title}</h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="font-secondary text-xs text-accent hover:underline"
                >
                  Done
                </button>
              </div>
              <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto">
                {tags.map(tag => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <Badge
                      key={tag}
                      onClick={(e) => handleItemClick(e, tag)}
                      className={`
                        cursor-pointer font-secondary text-xs pixel-border transition-all
                        ${isSelected 
                          ? 'bg-accent text-accent-foreground hover:bg-accent/80' 
                          : 'bg-secondary/20 hover:bg-secondary/30'}
                      `}
                    >
                      {tag}
                      {isSelected && <X className="w-3 h-3 ml-1" />}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <PixelCard className="mb-8" hover={false}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-primary text-lg">Filter:</h2>
          
          <FilterDropdown
            title="Work Type"
            tags={availableTags.workTypes}
            selectedTags={selectedFilters.workTypes}
            category="workTypes"
          />
          
          <FilterDropdown
            title="Industry"
            tags={availableTags.industries}
            selectedTags={selectedFilters.industries}
            category="industries"
          />
          
          <FilterDropdown
            title="Client Type"
            tags={availableTags.clientTypes}
            selectedTags={selectedFilters.clientTypes}
            category="clientTypes"
          />
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="font-secondary text-sm text-accent hover:underline whitespace-nowrap"
          >
            Clear All
          </button>
        )}
      </div>
    </PixelCard>
  );
}
