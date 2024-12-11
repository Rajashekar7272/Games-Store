import React, { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Platform {
  id: number;
  name: string;
}

interface PlatformSelectorProps {
  platforms: Platform[];
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ platforms, onSelectPlatform }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    onSelectPlatform(platform);
  };

  return (
    <div className="w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex justify-between items-center w-full">
            {selectedPlatform ? selectedPlatform.name : "Select Platform"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {platforms.map((platform) => (
            <DropdownMenuItem
              key={platform.id}
              onClick={() => handleSelect(platform)}
              className={selectedPlatform?.id === platform.id ? "bg-green-100 text-green-600" : ""}
            >
              {platform.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PlatformSelector;
