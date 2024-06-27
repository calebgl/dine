import { Carrot, Donut, Soup, Beef, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { randomUUID } from "crypto";

export default function Home() {
  const categories = [
    { icon: Carrot, name: "veggies" },
    { icon: Donut, name: "desserts" },
    { icon: Soup, name: "appetizers" },
    { icon: Beef, name: "entrees" },
  ];
  const colors = ["#90be6d", "#277da1", "#f8961e", "#f94144"];
  const dishes = [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      title: "Spaghetti Bolognese",
      description:
        "Classic Italian comfort food. Hearty meat sauce simmered with tomatoes served over pasta.",
      price: 12.99,
      reviews: 4.6,
    },
    {
      id: "89abcd01-f20e-48e0-b3ba-426614174001",
      title: "Chicken Tikka Masala",
      description:
        "Tender chicken marinated in yogurt and spices, cooked in a creamy tomato sauce.",
      price: 14.5,
      reviews: 4.2,
    },
    {
      id: "5678efgh-1a2b-34cd-e5f6-426614174002",
      title: "Pad Thai",
      description:
        "Stir-fried rice noodles with chicken, shrimp, vegetables, and a tangy peanut sauce.",
      price: 11.75,
      reviews: 3.9,
    },
    {
      id: "90abcdef-3c4d-5678-9abc-426614174003",
      title: "Sushi Platter",
      description: "Assortment of fresh sashimi and nigiri pieces.",
      price: 22.5,
      reviews: 4.8,
    },
    {
      id: "cdef0123-4567-89ab-cdef-426614174004",
      title: "French Onion Soup",
      description:
        "Rich beef broth topped with caramelized onions and melted Gruyere cheese.",
      price: 8.95,
      reviews: 3.2,
    },
    {
      id: "90abcdef-3c4d-5678-9abc-426614174004",
      title: "Black Bean Burger",
      description:
        "Vegetarian patty made with black beans, corn, and spices, served on a toasted bun with avocado and chipotle mayo.",
      price: 10.25,
      reviews: 5.0,
    },
  ];

  return (
    <>
      <div className="space-y-1">
        <h3 className="text-3xl font-bold">Overview</h3>
        <h4 className="text-base font-normal">Hello Caleb, welcome back!</h4>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Banner</CardTitle>
          </CardHeader>
          <CardContent>hola!</CardContent>
        </Card>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-1">
            {categories.map((category, index) => (
              <div
                className={cn(
                  "p-4 rounded-md flex items-center gap-3 cursor-pointer",
                  index === 1 && "bg-orange-100",
                )}
                key={category.name}
              >
                <div
                  className="p-2 rounded-md"
                  style={{ backgroundColor: colors[index] }}
                >
                  <category.icon />
                </div>
                <span className="text-sm capitalize font-semibold">
                  {category.name}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="capitalize">featured dishes</CardTitle>
          </CardHeader>
          <CardContent className="grid xl:grid-cols-2 gap-4">
            {dishes.map((dish) => (
              <div
                className="p-8 bg-green-100 rounded-lg flex flex-col xs:flex-row gap-2"
                key={dish.id}
              >
                <div className="size-16 bg-red-300 aspect-square"></div>
                <div>
                  <h5 className="text-base col-span-4">{dish.title}</h5>
                  <p>${dish.price.toFixed(2)}</p>
                  <p className="flex gap-1 items-center">
                    <Star className="size-4 fill-yellow-300 stroke-yellow-500" />
                    <span className="text-nowrap text-ellipsis break-keepp">
                      {dish.reviews.toFixed(1)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
