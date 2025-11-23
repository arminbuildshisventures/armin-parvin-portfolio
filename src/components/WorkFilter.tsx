import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { PixelCard } from "./PixelCard";

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

  const FilterSection = ({ 
    title, 
    tags, 
    selectedTags, 
    category 
  }: { 
    title: string; 
    tags: string[]; 
    selectedTags: string[]; 
    category: 'workTypes' | 'industries' | 'clientTypes';
  }) => (
    <div>
      <h3 className="font-primary text-sm mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Badge
              key={tag}
              onClick={() => onFilterChange(category, tag)}
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
  );

  return (
    <PixelCard className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-primary text-xl">Filter Work</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="font-secondary text-sm text-accent hover:underline"
          >
            Clear All
          </button>
        )}
      </div>
      
      <div className="space-y-6">
        <FilterSection
          title="Work Type"
          tags={availableTags.workTypes}
          selectedTags={selectedFilters.workTypes}
          category="workTypes"
        />
        
        <FilterSection
          title="Industry"
          tags={availableTags.industries}
          selectedTags={selectedFilters.industries}
          category="industries"
        />
        
        <FilterSection
          title="Client Type"
          tags={availableTags.clientTypes}
          selectedTags={selectedFilters.clientTypes}
          category="clientTypes"
        />
      </div>
    </PixelCard>
  );
}
