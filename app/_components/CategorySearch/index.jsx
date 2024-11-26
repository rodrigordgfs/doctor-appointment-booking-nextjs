"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CategorySearch() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    GlobalApi.getCategories().then(({ data }) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <h2 className="text-4xl text-bold tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h3 className="text-gray-500 text-xl">
        Search your doctor and book appointment in on click
      </h3>
      <div className="flex w-full mt-2 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search ..." />
        <Button type="submit">
          <Search className="h-4 2-4" />
          Search
        </Button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 text-center p-5 bg-blue-50 rounded-lg hover:scale-110 cursor-pointer hover:bg-blue-200 transition-all"
          >
            <Image
              src={category.Icon?.url}
              alt={category.Name}
              width={40}
              height={40}
            />
            <p className="text-blue-600 text-sm">{category.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
