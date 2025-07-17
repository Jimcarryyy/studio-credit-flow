
import React from 'react';
import { Button } from '@/components/ui/button';

interface RegionFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const RegionFilter = ({ selectedRegion, onRegionChange }: RegionFilterProps) => {
  const regions = ['All', 'Central', 'North', 'East', 'West', 'South'];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {regions.map((region) => (
        <Button
          key={region}
          variant={selectedRegion === region ? "default" : "outline"}
          onClick={() => onRegionChange(region)}
          className={`font-medium transition-all ${
            selectedRegion === region
              ? "bg-fitness-red hover:bg-red-600 text-white"
              : "border-gray-300 text-gray-700 hover:border-fitness-red hover:text-fitness-red"
          }`}
        >
          {region} London
        </Button>
      ))}
    </div>
  );
};

export default RegionFilter;
