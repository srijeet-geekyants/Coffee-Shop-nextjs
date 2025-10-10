import Header from "@/components/layouts/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import type { Route } from "next";

// Mock data for localities within a city - you would fetch this from an API
const mockLocalities = [
  { name: "Indiranagar", path: "/bengaluru/indiranagar" },
  { name: "Marathahalli", path: "/bengaluru/marathahalli" },
  { name: "Whitefield", path: "/bengaluru/whitefield" },
  { name: "Koramangala", path: "/bengaluru/koramangala" },
  { name: "Jayanagar", path: "/bengaluru/jayanagar" },
  { name: "HSR Layout", path: "/bengaluru/hsr-layout" },
];

type CityPageProps = {
  params: {
    city: string;
  };
};

export default async function CityPage({ params }: CityPageProps) {
  const city = decodeURIComponent(params.city);
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem key="home">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator key="sep" />
            <BreadcrumbItem key="city">
              <BreadcrumbPage>{capitalizedCity}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mt-6 text-3xl font-bold">
          Popular Localities in {capitalizedCity}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockLocalities.map((locality) => (
            <Link href={locality.path as Route} key={locality.name} passHref>
              <Card className="cursor-pointer transition-transform duration-200 hover:scale-105">
                <CardHeader>
                  <CardTitle>{locality.name}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}