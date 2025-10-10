import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type RestaurantCardProps = {
  restaurant: {
    name: string;
    imageUrl: string;
    cuisine: string;
    rating: number;
  };
};

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden transition-transform duration-200 hover:scale-105">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
        width={400}
        height={200}
        className="h-40 w-full object-cover"
      />
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{restaurant.name}</CardTitle>
          <Badge>{restaurant.rating} ★</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{restaurant.cuisine}</p>
      </CardContent>
    </Card>
  );
}