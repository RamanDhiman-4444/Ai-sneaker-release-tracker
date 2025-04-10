
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Release {
  id: number;
  name: string;
  brand: string;
  image: string;
  releaseDate: string;
  price: string;
}

interface RecentReleasesProps {
  className?: string;
}

const SAMPLE_RELEASES: Release[] = [
  {
    id: 1,
    name: "Air Jordan 1 High OG 'Chicago Reimagined'",
    brand: "Nike",
    image: "https://placeholder.svg",
    releaseDate: "Nov 15, 2025",
    price: "$180"
  },
  {
    id: 2,
    name: "Yeezy Boost 350 V2 'Slate'",
    brand: "Adidas",
    image: "https://placeholder.svg",
    releaseDate: "Nov 18, 2025",
    price: "$230"
  },
  {
    id: 3,
    name: "Dunk Low 'Fruity Pack'",
    brand: "Nike",
    image: "https://placeholder.svg",
    releaseDate: "Nov 20, 2025",
    price: "$110"
  },
];

const RecentReleases: React.FC<RecentReleasesProps> = ({ className }) => {
  return (
    <div className={cn("px-4 py-6", className)}>
      <h2 className="text-lg font-semibold mb-4">Upcoming Releases</h2>
      <div className="space-y-4">
        {SAMPLE_RELEASES.map((release) => (
          <Card key={release.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="w-24 h-24 flex-shrink-0 bg-sneaker-gray flex items-center justify-center">
                <img 
                  src={release.image} 
                  alt={release.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-1">
                <CardHeader className="py-2 px-3">
                  <CardTitle className="text-sm font-medium line-clamp-1">{release.name}</CardTitle>
                  <CardDescription className="text-xs">{release.brand}</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-3">
                  <div className="text-xs flex justify-between items-center">
                    <span>{release.releaseDate}</span>
                    <span className="font-medium">{release.price}</span>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentReleases;
